from django.shortcuts import redirect, render
from .forms import ApplicationForm
from Orders.models import Orders
from Portfolio.models import Portfolio
from Options.models import Options, Category
import time

from TelebotMessage.sendmessage import sendTelegram
# from .forms import ContactForm, ReviewCommentForm

# Create your views here.


def index(request):
    form = ApplicationForm()
    context = {
        'sites': Portfolio.objects.all(),
        'options_web': Options.objects.filter(cat__name="WEB"),
        'options_smm': Options.objects.filter(cat__name="SMM"),
        'options_design': Options.objects.filter(cat__name='DESIGN')
    }

    if request.method == 'POST':
        name_of_option = request.POST['choosen_option']
        user = request.POST['username']
        user_mail = request.POST['user_mail']
        user_text = request.POST['user_text']
        element = Orders(order_name=user, order_mail=user_mail,
                         order_text=user_text)
        element.save()
        sendTelegram(tg_option=name_of_option, tg_name=user,
                     tg_mail=user_mail, tg_text=user_text)
        time.sleep(1)
        return redirect('mainpage')

    return render(request, 'advancedStudio/index.html', {'form': form, 'context': context})
