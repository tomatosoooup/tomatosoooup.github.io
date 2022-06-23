from django.contrib import admin
from .models import *
# Register your models here.


class TeleSettingsAdmin(admin.ModelAdmin):
    list_display = ('id', 'tg_token',
                    'tg_chat')
    list_display_links = ('id', 'tg_token',
                          'tg_chat')


admin.site.register(TeleSettings, TeleSettingsAdmin)
