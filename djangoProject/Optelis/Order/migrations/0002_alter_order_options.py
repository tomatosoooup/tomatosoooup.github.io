# Generated by Django 4.0 on 2022-06-22 08:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Order', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'ordering': ['-id'], 'verbose_name': 'Замовлення', 'verbose_name_plural': 'Замовлення'},
        ),
    ]
