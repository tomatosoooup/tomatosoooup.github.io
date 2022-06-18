from django.db import models

# Create your models here.


class Question(models.Model):
    question_text = models.CharField(max_length=120)
    answer = models.TextField()

    def __str__(self):
        return self.question_text

    class Meta:
        verbose_name = "Питання"
        verbose_name_plural = "Питання"
