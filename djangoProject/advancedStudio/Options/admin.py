from django.contrib import admin
from .models import *

# Register your models here.


class OptionsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_of_option',
                    'image')
    list_display_links = ('id', 'name_of_option',
                          'image')


admin.site.register(Options, OptionsAdmin)
