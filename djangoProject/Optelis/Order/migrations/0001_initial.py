# Generated by Django 4.0 on 2022-06-29 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_name', models.CharField(max_length=200, verbose_name="Ім'я")),
                ('order_phone', models.CharField(max_length=200, verbose_name='Телефон')),
                ('order_text', models.TextField(verbose_name='Текст замовлення')),
            ],
            options={
                'verbose_name': 'Замовлення',
                'verbose_name_plural': 'Замовлення',
                'ordering': ['-id'],
            },
        ),
    ]