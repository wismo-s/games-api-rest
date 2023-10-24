from rest_framework import viewsets
from .models import Games, Developers, Genders
from .serializers import GamesSerializer, GendersSerializer, DevelopersSerializer

# Create your views here.

class GamesViewSet(viewsets.ModelViewSet):
    serializer_class = GamesSerializer
    queryset = Games.objects.all()
    
class DeveloperViewSet(viewsets.ModelViewSet):
    serializer_class = DevelopersSerializer
    queryset = Developers.objects.all()

class GendersViewSet(viewsets.ModelViewSet):
    serializer_class = GendersSerializer
    queryset = Genders.objects.all()