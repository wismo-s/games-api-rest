from django.db import models

#Create your models here.

class Developers(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()

    def str(self):
        return self.name

class Genders(models.Model):
    title = models.CharField(max_length=100, unique=True, null=False, blank=False)

    def str(self):
        return self.title

class Games(models.Model):
    title = models.CharField(max_length=200, unique=True, null=False, blank=False)
    description = models.TextField(null=False, blank=False)
    developer = models.ForeignKey(Developers, on_delete=models.CASCADE, null=False, blank=False)
    date_realise = models.DateField(null=False)
    sellers = models.IntegerField()
    calification = models.IntegerField()
    gender = models.ManyToManyField(Genders)

    def str(self):
        return f"{self.title} -> {self.developer}"