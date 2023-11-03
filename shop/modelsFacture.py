from django.db import models
from django.utils import timezone
from user.models import CustomUser
from games.models import Games

class Factures(models.Model):
    games = models.ManyToManyField(Games)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, default=2)
    time_shop = models.DateTimeField(default=timezone.now)
    total = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)