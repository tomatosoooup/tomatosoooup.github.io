from django.db import models

# Create your models here.


class Sertificate(models.Model):
    name_of_sertificate = models.CharField(
        max_length=50, verbose_name='Назва сертифікату')
    image = models.ImageField(upload_to='images', verbose_name='Фото')
    publish_or_not = models.BooleanField(
        default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати')

    def __str__(self):
        return self.name_of_sertificate

    class Meta:
        verbose_name = "Сертифікат"
        verbose_name_plural = "Сертифікати"
