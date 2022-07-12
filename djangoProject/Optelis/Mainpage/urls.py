from django import views
from django.urls import path
from .views import *

from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', index, name='mainpage'),
    path('favicon.ico', RedirectView.as_view(
        url=staticfiles_storage.url('favicon/favicon.ico'))),
]
