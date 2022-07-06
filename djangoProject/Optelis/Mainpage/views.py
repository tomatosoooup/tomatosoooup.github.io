from django.shortcuts import redirect, render
from django.views.decorators.cache import never_cache

from Sertificates.models import *
from Questions.models import *
from Options.models import *
from Rewievs.models import Rewiev
from TelebotMessage.sendmessage import sendTelegram
from .forms import ContactForm, ReviewCommentForm
from Order.models import Order


import time

# Create your views here.


@never_cache
def index(request):
    form = ContactForm()
    rewiev_comment = ReviewCommentForm()
    context = {
        'menu': {
            'header': 'Головна',
            'sertificates': 'Сертифікати',
            'options': 'Послуги та ціни',
            'contacts': 'Контакти'
        },
        'sertificates': Sertificate.objects.filter(publish_or_not=True),
        'questions': Question.objects.filter(publish_or_not=True)[:6],
        'options': Option.objects.filter(publish_or_not=True)[:8],
        'rewievs': Rewiev.objects.filter(publish_or_not=True)[:4],
    }

    if request.method == 'POST' and 'btn2' in request.POST:
        user = request.POST['name']
        phone = request.POST['phone']
        user_text = request.POST['text']
        element = Order(order_name=user, order_phone=phone,
                        order_text=user_text)
        element.save()
        sendTelegram(tg_name=user, tg_phone=phone, tg_text=user_text)
        time.sleep(1)
        return redirect('mainpage')

    if request.method == 'POST' and 'btn1' in request.POST:
        user_name = request.POST['name_rewiev']
        user_phone = request.POST['phone_rewiev']
        user_rewiev_text = request.POST['user_text']
        element = Rewiev(username=user_name,
                         user_phone=user_phone, rewiev_text=user_rewiev_text)
        element.save()
        time.sleep(1)
        return redirect('mainpage')
    return render(request, 'Optelis/index.html', {'context': context, 'form': form, 'comment': rewiev_comment})
