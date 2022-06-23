from django.apps import AppConfig


class MainpageConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Mainpage'
    verbose_name: str = 'Це головна сторінка'
