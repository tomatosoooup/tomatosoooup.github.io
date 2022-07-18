from django.contrib import admin
from .models import *
# Register your models here.


class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'order_name',
                    'order_phone')
    list_display_links = ('id', 'order_name',
                          'order_phone')
    search_fields = ('order_name',
                     'order_phone')


admin.site.register(Order, OrderAdmin)
