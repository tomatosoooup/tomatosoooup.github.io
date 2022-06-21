# Generated by Django 4.0 on 2022-06-19 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Rewievs', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='rewiev',
            options={'verbose_name': 'Відгук', 'verbose_name_plural': 'Відгуки'},
        ),
        migrations.AlterField(
            model_name='rewiev',
            name='user_type',
            field=models.CharField(choices=[('Пацієнт(ка)', 'Пацієнт(ка)'), ('Знайомий(а)', 'Знайомий(а)')], default='Пацієнт(ка)', max_length=15),
        ),
    ]