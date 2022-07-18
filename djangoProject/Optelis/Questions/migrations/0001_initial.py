# Generated by Django 4.0 on 2022-06-29 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question_text', models.CharField(max_length=120, verbose_name='Питання')),
                ('answer', models.TextField(verbose_name='Відповідь')),
                ('publish_or_not', models.BooleanField(default=False, help_text='З галочкою - так, без - ні', verbose_name='Публікувати')),
            ],
            options={
                'verbose_name': 'Питання',
                'verbose_name_plural': 'Питання',
                'ordering': ['-id'],
            },
        ),
    ]
