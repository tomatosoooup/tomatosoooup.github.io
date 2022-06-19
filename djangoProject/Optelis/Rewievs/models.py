from random import choices
from django.db import models

# Create your models here.


class Rewiev(models.Model):
    PATIENT = 'Пацієнт(ка)'
    FAMILIAR = 'Знайомий(а)'
    TYPE_OF_USER = [
        (PATIENT, 'Пацієнт(ка)'),
        (FAMILIAR, 'Знайомий(а)'),
    ]
    username = models.CharField(max_length=25)
    user_type = models.CharField(
        default=PATIENT, max_length=15, choices=TYPE_OF_USER)
    rewiev_text = models.TextField(max_length=150)
    publist_or_not = models.BooleanField(
        default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати')

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "Відгук"
        verbose_name_plural = "Відгуки"
