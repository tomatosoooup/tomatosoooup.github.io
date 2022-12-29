from django.shortcuts import render, redirect
from Portfolio.models import *
from Services.models import *
from Skills.models import *
from TelebotMessage.sendmessage import sendTelegram
from .forms import *

def index(request):
    form = UserQueryForm()

    context = {
        'menu': {
            'skills': 'SKILLS',
            'portfolio': 'PORTFOLIO',
            'services': 'SERVICES',
            'contacts': 'CONTACTS'
        },
        'Portfolio': Portfolio.objects.all(),
        'Services': Services.objects.all(),
        'Skills': Skills.objects.all()
    }

    if request.method == 'POST':
        user = request.POST['username']
        email = request.POST['user_email']
        text = request.POST['user_text']

        sendTelegram(tg_name=user, tg_email=email, tg_text=text)

        return redirect('mainpage')


    return render(request, 'Freelancers/index.html', {'context': context, 'form': form})
