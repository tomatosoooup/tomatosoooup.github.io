from django.shortcuts import render

from Sertificates.models import *
from Questions.models import *
from Options.models import *

# Create your views here.


def index(request):
    context = {
        'menu': {
            'header': 'Головна',
            'sertificates': 'Сертифікати',
            'options': 'Послуги та ціни',
            'contacts': 'Контакти'
        },
        'sertificates': Sertificate.objects.all(),
        'questions': Question.objects.all()[:6],
        'options': Option.objects.filter(publish_or_not=True)[:8],
    }

    return render(request, 'Optelis/index.html', {'context': context})
