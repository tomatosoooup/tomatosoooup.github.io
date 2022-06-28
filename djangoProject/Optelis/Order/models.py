from django.db import models

# Create your models here.


class Order(models.Model):
    order_name = models.CharField(max_length=200, verbose_name="Ім'я")
    order_phone = models.CharField(max_length=200, verbose_name='Телефон')
    order_text = models.TextField(verbose_name='Текст замовлення')

    def __str__(self):
        return self.order_name

    class Meta:
        verbose_name = 'Замовлення'
        verbose_name_plural = 'Замовлення'
        ordering = ['-id']
