from django.db import models

#Create your models here.

class Developers(models.Model):
    name = models.CharField(max_length=100, unique=True)
    perfil_image = models.CharField(max_length=300, null=True)
    baner_image = models.CharField(max_length=300, blank=True, null= True)
    description = models.TextField()

    def __str__(self):
        return self.name

class Genders(models.Model):
    title = models.CharField(max_length=100, unique=True, null=False, blank=False)
    image_url = models.CharField(max_length=300, blank=True, null= True)

    def __str__(self):
        return self.title

class Games(models.Model):
    title = models.CharField(max_length=200, unique=True, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    port_image = models.CharField(max_length=300, null=True)
    baner_image = models.CharField(max_length=300, blank=True, null= True)
    trailer = models.CharField(max_length=300, blank=True, null=True)
    developer = models.ForeignKey(Developers, on_delete=models.CASCADE, null=False, blank=False)
    date_realise = models.DateField(null=False)
    sellers = models.IntegerField(blank=True)
    calification = models.IntegerField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False, default=1)
    gender = models.ManyToManyField(Genders)

    def __str__(self):
        return f"{self.title} -> {self.developer}"