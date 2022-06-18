from django.db import models

# Create your models here.


class Option(models.Model):
    name_of_option = models.CharField(max_length=40)
    price_of_option = models.CharField(max_length=20)
    publish_or_not = models.BooleanField(
        default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати')

    def __str__(self):
        return self.name_of_option

    class Meta:
        verbose_name = "Послуги"
        verbose_name_plural = "Послуга"
