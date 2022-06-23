from django.contrib import admin
from .models import *
# Register your models here.


class QuestionAdmin(admin.ModelAdmin):
    list_display = ('id', 'question_text',
                    'answer', 'publish_or_not')
    list_display_links = ('id', 'question_text',
                          'answer', 'publish_or_not')


admin.site.register(Question, QuestionAdmin)
