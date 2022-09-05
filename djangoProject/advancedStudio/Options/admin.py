from django.contrib import admin
from .models import *

# Register your models here.


class OptionsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_of_option',
                    'image')
    list_display_links = ('id', 'name_of_option',
                          'image')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


admin.site.register(Options, OptionsAdmin)
admin.site.register(Category, CategoryAdmin)
