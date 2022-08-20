from django.shortcuts import redirect, render
from django.views.decorators.cache import never_cache
from .forms import ApplicationForm
from Orders.models import Orders
from Portfolio.models import Portfolio
import time

# from TelebotMessage.sendmessage import sendTelegram
# from .forms import ContactForm, ReviewCommentForm

# Create your views here.


def index(request):
    form = ApplicationForm()
    context = {
        'sites': Portfolio.objects.all()
    }

    if request.method == 'POST':
        user = request.POST['username']
        user_mail = request.POST['user_mail']
        user_text = request.POST['user_text']
        element = Orders(order_name=user, order_mail=user_mail,
                         order_text=user_text)
        element.save()
        # sendTelegram(tg_name=user, tg_phone=phone, tg_text=user_text)
        time.sleep(1)
        return redirect('mainpage')

    return render(request, 'advancedStudio/index.html', {'form': form, 'context': context})
