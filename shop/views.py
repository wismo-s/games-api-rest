from django.shortcuts import render
from rest_framework import viewsets
from .models import Cart
from .serializers import CartSerializer

# Create your views here.
class CartViewSets(viewsets.ModelViewSet):
    serializer_class = CartSerializer
    queryset = Cart.objects.all()
