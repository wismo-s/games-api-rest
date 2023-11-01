from typing import Any
from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from shop.models import Cart

class CustomUserManager(BaseUserManager):
    def create_user(self, username, email, password=None):
        if not username:
            raise ValueError('the username is required')
        if not password:
            raise ValueError('the password is required')
        if not email:
            raise ValueError('the email is required')
        email = self.normalize_email(email)
        cart = Cart.objects.create()
        user = self.model(username=username, email=email, cart=cart)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, username, email, password=None):
        if not username:
            raise ValueError('the username is required')
        if not password:
            raise ValueError('the password is required')
        if not email:
            raise ValueError('the email is required')
        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.save()

        return user
    
class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=120, blank=False, null=False, unique=True)
    email = models.EmailField(unique=True, blank=True, null=False)
    image_perfil = models.CharField(max_length=300, default='https://thumbs.dreamstime.com/b/perfil-de-usuario-vectorial-avatar-predeterminado-179376714.jpg', blank=True, null=False)
    first_name = models.CharField(max_length=30, blank=True, null=False)
    last_name = models.CharField(max_length=30, blank=True, null=False)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, default=1)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    objects = CustomUserManager()

    class Meta:
        db_table = 'user_customuser'
        
    def __str__(self):
        return self.username