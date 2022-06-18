from django.db import models

# Create your models here.


class Sertificate(models.Model):
    name_of_sertificate = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')

    def __str__(self):
        return self.name_of_sertificate

    class Meta:
        verbose_name = "Сертифікат"
        verbose_name_plural = "Сертифікати"
