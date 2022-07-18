from django.contrib import admin
from .models import *
# Register your models here.


class OptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_of_option',
                    'price_of_option', 'publish_or_not')
    list_display_links = ('id', 'name_of_option',
                          'price_of_option', 'publish_or_not')


admin.site.register(Option, OptionAdmin)
