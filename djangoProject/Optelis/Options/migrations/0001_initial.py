# Generated by Django 4.0 on 2022-06-18 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Option',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_option', models.CharField(max_length=40)),
                ('price_of_option', models.CharField(max_length=10)),
                ('Publish', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Послуги',
                'verbose_name_plural': 'Послуга',
            },
        ),
    ]
