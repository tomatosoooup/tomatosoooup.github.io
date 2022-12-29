from django.db import models
from django.core.validators import FileExtensionValidator


# Create your models here.

class TypeOfSite(models.Model):
    type_of_site = models.CharField(max_length=30, verbose_name='Тип сайту')

    def __str__(self):
        return self.type_of_site
    
    class Meta:
        verbose_name = 'Тип проекту'
        verbose_name_plural = 'Типи проекту'


class Portfolio(models.Model):
    portfolio_name = models.CharField(max_length=30, verbose_name='Назва сайту')
    description = models.TextField(max_length=200, verbose_name='Опис сайту')
    site_type = models.OneToOneField(TypeOfSite, on_delete=models.CASCADE, primary_key=True, default='Landing page')
    image = models.ImageField(upload_to='images', verbose_name='Фото сайту')
    icon_svg = models.FileField(upload_to='site_icons',validators=[FileExtensionValidator(['pdf', 'doc', 'svg'])])

    def __str__(self):
        return self.portfolio_name
    
    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекти'


