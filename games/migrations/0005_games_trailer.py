# Generated by Django 4.2.6 on 2023-10-20 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('games', '0004_games_baner_image_games_port_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='games',
            name='trailer',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
