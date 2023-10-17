from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.CharField(max_length=300, default="https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg", null=True)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return self.user.username
    
# Create your models here.
