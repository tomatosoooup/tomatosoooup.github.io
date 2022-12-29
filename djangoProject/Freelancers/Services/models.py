from django.db import models

# Create your models here.

class Options(models.Model):
    option = models.CharField(max_length=30)

    def __str__(self):
        return self.option

    class Meta:
        verbose_name = 'Опис'
        verbose_name_plural = 'Опис'
        ordering = ['option']

class Services(models.Model):
    name_of_service = models.CharField(max_length=20, null=False)
    options = models.ManyToManyField(Options)
    price = models.IntegerField()

    def __str__(self):
        return self.name_of_service

    # def clean_options(self):
    #     self.options = self.options.split(',')

    class Meta:
        verbose_name = 'Послуга'
        verbose_name_plural = 'Послуги'

