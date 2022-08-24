from django.db import models

# Create your models here.


class Options(models.Model):
    name_of_option = models.CharField(
        max_length=50, verbose_name='Назва послуги')
    image = models.ImageField(upload_to='images', verbose_name='Фото послуги')
    description = models.CharField(
        max_length=200, verbose_name='')

    def __str__(self):
        return self.name_of_option

    class Meta:
        verbose_name = "Послуга"
        verbose_name_plural = "Послуги"
