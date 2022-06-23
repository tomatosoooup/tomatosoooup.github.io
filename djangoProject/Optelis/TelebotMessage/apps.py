from django.apps import AppConfig


class TelebotmessageConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'TelebotMessage'
    verbose_name: str = 'Повідомлення в ТГ'
