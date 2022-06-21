from django.shortcuts import render, get_object_or_404

from Sertificates.models import *
from Questions.models import *
from Options.models import *
from Rewievs.models import Rewiev
from TelebotMessage.sendmessage import sendTelegram
from .forms import ContactForm
from Order.models import Order

# Create your views here.


def index(request):
    form = ContactForm()
    context = {
        'menu': {
            'header': 'Головна',
            'sertificates': 'Сертифікати',
            'options': 'Послуги та ціни',
            'contacts': 'Контакти'
        },
        'sertificates': Sertificate.objects.all()[:4],
        'questions': Question.objects.all()[:6],
        'options': Option.objects.filter(publish_or_not=True)[:8],
        'rewievs': Rewiev.objects.filter(publist_or_not=True)[:3],
        'form': form
    }

    return render(request, 'Optelis/index.html', {'context': context})


def thanks_page(request):
    user = request.POST['name']
    phone = request.POST['phone']
    element = Order(order_name=user, order_phone=phone)
    element.save()
    sendTelegram(tg_name=user, tg_phone=phone)
    return render(request, 'Optelis/thanks_page.html', {'name': user})


def single_question(request, pk):
    question = get_object_or_404(Question, pk=pk)
    return render(request, 'Optelis/single_question.html', {'question': question})
