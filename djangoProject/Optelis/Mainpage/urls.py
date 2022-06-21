from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='mainpage'),
    path('thanks', thanks_page, name='thanks_page'),
    path('question/<int:pk>/', single_question, name='single_question')
]
