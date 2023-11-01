from django.db import models
from games.models import Games
from django.utils import timezone

# Create your models here.
class Cart(models.Model):
    games = models.ManyToManyField(Games)
    
class Facture(models.Model):
    games = models.ManyToManyField(Games)
    time_shop = models.DateTimeField(default=timezone.now)
    total = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)