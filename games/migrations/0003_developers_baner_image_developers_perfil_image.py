# Generated by Django 4.2.6 on 2023-10-17 01:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0002_genders_image_url_alter_games_calification_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='developers',
            name='baner_image',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='developers',
            name='perfil_image',
            field=models.CharField(max_length=300, null=True),
        ),
    ]