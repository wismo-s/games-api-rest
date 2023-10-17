from rest_framework import viewsets
from .models import UserProfile
from .serializers import UserSerializer

# Create your views here.
class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class= UserSerializer
    queryset=UserProfile.objects.all()