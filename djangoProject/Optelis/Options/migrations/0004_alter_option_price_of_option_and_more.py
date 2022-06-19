# Generated by Django 4.0 on 2022-06-19 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Options', '0003_remove_option_можна публікувати_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='option',
            name='price_of_option',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='option',
            name='publish_or_not',
            field=models.BooleanField(default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати'),
        ),
    ]
