# Generated by Django 4.0 on 2022-06-22 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Sertificates', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sertificate',
            name='publish_or_not',
            field=models.BooleanField(default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати'),
        ),
    ]
