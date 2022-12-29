from django.db import models

# Create your models here.

class TeleSettings(models.Model):
    tg_token = models.CharField(max_length=200, verbose_name='Токен чата')
    tg_chat = models.CharField(max_length=200, verbose_name='Айді чата')
    tg_info = models.TextField(verbose_name='Текст заявки')

    def __str__(self):
        return self.tg_chat

    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'