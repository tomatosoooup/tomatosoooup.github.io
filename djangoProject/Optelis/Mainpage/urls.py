from django import views
from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='mainpage'),
    path('thanks', thanks_page, name='thanks_page'),
    path('rewiev', rewiev_page, name='rewiev_page'),
]
