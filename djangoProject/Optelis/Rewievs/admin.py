from django.contrib import admin
from .models import *

# Register your models here.


class RewievAdmin(admin.ModelAdmin):
    list_display = ('id', 'username',
                    'user_type', 'publish_or_not')
    list_display_links = ('id', 'username',
                          'user_type', 'publish_or_not')
    search_fields = ('username', 'user_type')


admin.site.register(Rewiev, RewievAdmin)
