from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Категорія"
        verbose_name_plural = "Категорії"


class Options(models.Model):
    name_of_option = models.CharField(
        max_length=50, verbose_name='Назва послуги')
    image = models.ImageField(upload_to='images', verbose_name='Фото послуги')
    description = models.CharField(
        max_length=200, verbose_name='')
    cat = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)

    def __str__(self):
        return self.name_of_option

    class Meta:
        verbose_name = "Послуга"
        verbose_name_plural = "Послуги"
