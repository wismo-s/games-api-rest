from django.db import models
from django.utils import timezone
from games.models import Games
# Create your models here.
class Cart(models.Model):
    games = models.ManyToManyField(Games, blank=True)
    
class Facture(models.Model):
    games = models.ManyToManyField(Games)
    time_shop = models.DateTimeField(default=timezone.now)
    total = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
