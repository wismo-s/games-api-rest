from typing import Any
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('the email is required')
        if not password:
            raise ValueError('the password is required')
        email = self.normalize_email(email)
        user = self.model(email = email)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
class CustomUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=120, blank=False, null=False, unique=True)
    email = models.EmailField(unique=True)
    image_perfil = models.CharField(max_length=300, default='https://thumbs.dreamstime.com/b/perfil-de-usuario-vectorial-avatar-predeterminado-179376714.jpg', blank=True, null=False)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    objects = CustomUserManager()

    class Meta:
        db_table = 'user_customuser'
    def __str__(self):
        return self.email
