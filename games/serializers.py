from rest_framework import serializers
from .models import Developers, Genders, Games

class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = "__all__"