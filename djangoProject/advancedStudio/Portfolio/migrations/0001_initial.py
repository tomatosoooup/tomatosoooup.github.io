# Generated by Django 4.0 on 2022-08-20 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_site', models.CharField(max_length=50, verbose_name='Назва сайту')),
                ('image', models.ImageField(upload_to='images', verbose_name='Фото')),
                ('link_of_site', models.CharField(max_length=70, verbose_name='Ссилка на сайт')),
            ],
            options={
                'verbose_name': 'Сайт',
                'verbose_name_plural': 'Сайти',
            },
        ),
    ]