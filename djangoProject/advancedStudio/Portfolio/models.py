from django.db import models

# Create your models here.


class Portfolio(models.Model):
    name_of_site = models.CharField(
        max_length=50, verbose_name='Назва сайту')
    image = models.ImageField(upload_to='images', verbose_name='Фото')
    link_of_site = models.CharField(
        max_length=70, verbose_name='Ссилка на сайт')

    def __str__(self):
        return self.name_of_site

    class Meta:
        verbose_name = "Сайт"
        verbose_name_plural = "Сайти"
