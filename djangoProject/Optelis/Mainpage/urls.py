from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='mainpage'),
    path('order', thanks_page, name='thanks_page')
]
