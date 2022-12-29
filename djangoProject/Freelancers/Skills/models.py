from django.db import models
from django.core.validators import FileExtensionValidator

# Create your models here.

class Skills(models.Model):
    skill_name = models.CharField(max_length=15, verbose_name="Назва скілу")
    skill_cat = models.CharField(max_length=20, verbose_name='Категорія скілу')
    icon_svg = models.FileField(upload_to='skill_icons',validators=[FileExtensionValidator(['pdf', 'doc', 'svg'])])


    def __str__(self):
        return self.skill_name

    class Meta:
        verbose_name = 'Навичка'
        verbose_name_plural = 'Навички'