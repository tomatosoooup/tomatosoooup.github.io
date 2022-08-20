from django.contrib import admin
from .models import *

# Register your models here.


class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_of_site',
                    'image')
    list_display_links = ('id', 'name_of_site',
                          'image')


admin.site.register(Portfolio, PortfolioAdmin)
