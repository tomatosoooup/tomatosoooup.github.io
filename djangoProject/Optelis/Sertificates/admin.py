from django.contrib import admin
from .models import *

# Register your models here.


class SertificateAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_of_sertificate',
                    'image', 'publish_or_not')
    list_display_links = ('id', 'name_of_sertificate',
                          'image', 'publish_or_not')


admin.site.register(Sertificate, SertificateAdmin)
