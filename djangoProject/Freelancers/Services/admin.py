from django.contrib import admin
from .models import *
# Register your models here.

# class ServicesAdmin(admin.ModelAdmin):
#     fields = ('name_of_service', 'price')

admin.site.register(Options)
admin.site.register(Services)