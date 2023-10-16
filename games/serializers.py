from rest_framework import serializers
from .models import Developers, Genders, Games

class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = "__all__"

class DevelopersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developers
        fields = "__all__"
        
class GendersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genders
        fields = "__all__"