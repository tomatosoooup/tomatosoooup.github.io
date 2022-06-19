# Generated by Django 4.0 on 2022-06-19 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Rewiev',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=25)),
                ('user_type', models.CharField(choices=[('PT', 'Пацієнт'), ('FA', 'Знайомий')], default='PT', max_length=2)),
                ('rewiev_text', models.TextField(max_length=150)),
                ('publist_or_not', models.BooleanField(default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати')),
            ],
            options={
                'verbose_name': 'Відгуки',
                'verbose_name_plural': 'Відгук',
            },
        ),
    ]
