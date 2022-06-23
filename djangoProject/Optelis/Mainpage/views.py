from django.shortcuts import redirect, render, get_object_or_404

from Sertificates.models import *
from Questions.models import *
from Options.models import *
from Rewievs.models import Rewiev
from TelebotMessage.sendmessage import sendTelegram
from .forms import ContactForm, ReviewCommentForm
from Order.models import Order

# Create your views here.


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
        'sertificates': Sertificate.objects.filter(publish_or_not=True)[:4],
        'questions': Question.objects.filter(publish_or_not=True)[:6],
        'options': Option.objects.filter(publish_or_not=True)[:8],
        'rewievs': Rewiev.objects.filter(publish_or_not=True)[:4],
        'form': form,
        'comment': rewiev_comment,
    }

    return render(request, 'Optelis/index.html', {'context': context})


def thanks_page(request):
    user = request.POST['name']
    phone = request.POST['phone']
    element = Order(order_name=user, order_phone=phone)
    element.save()
    sendTelegram(tg_name=user, tg_phone=phone)
    return render(request, 'Optelis/thanks_page.html', {'name': user})


def rewiev_page(request):
    user_name = request.POST['name_rewiev']
    user_rewiev_text = request.POST['user_text']
    element = Rewiev(username=user_name, rewiev_text=user_rewiev_text)
    element.save()
    return render(request, 'Optelis/rewiev.html', {'text': user_rewiev_text, 'user_name': user_name})
