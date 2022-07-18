from django.db import models

# Create your models here.


class Question(models.Model):
    question_text = models.CharField(max_length=120, verbose_name='Питання')
    answer = models.TextField(verbose_name='Відповідь')
    publish_or_not = models.BooleanField(
        default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати')

    def __str__(self):
        return self.question_text

    class Meta:
        verbose_name = "Питання"
        verbose_name_plural = "Питання"
        ordering = ['-id']
