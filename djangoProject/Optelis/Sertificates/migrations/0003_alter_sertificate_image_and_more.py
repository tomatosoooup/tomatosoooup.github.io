# Generated by Django 4.0 on 2022-06-22 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Sertificates', '0002_sertificate_publish_or_not'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sertificate',
            name='image',
            field=models.ImageField(upload_to='images', verbose_name='Фото'),
        ),
        migrations.AlterField(
            model_name='sertificate',
            name='name_of_sertificate',
            field=models.CharField(max_length=50, verbose_name='Назва сертифікату'),
        ),
    ]