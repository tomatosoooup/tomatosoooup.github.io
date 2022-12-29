from django.contrib import admin
from .models import *

# Register your models here.



class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('portfolio_name', 'site_type')
    list_display_links = ('portfolio_name', 'site_type')


admin.site.register(TypeOfSite)
admin.site.register(Portfolio, PortfolioAdmin)