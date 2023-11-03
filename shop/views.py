from django.shortcuts import render
from rest_framework import viewsets
from .models import Cart
from .modelsFacture import Factures
from .serializers import CartSerializer, FacturaSerializer

# Create your views here.
class CartViewSets(viewsets.ModelViewSet):
    serializer_class = CartSerializer
    queryset = Cart.objects.all()

class FacturesViwsSet(viewsets.ModelViewSet):
    serializer_class = FacturaSerializer
    queryset = Factures.objects.all()