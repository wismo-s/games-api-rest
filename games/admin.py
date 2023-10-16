from django.contrib import admin
from .models import Games, Genders, Developers
# Register your models here.
admin.site.register(Games)
admin.site.register(Genders)
admin.site.register(Developers)