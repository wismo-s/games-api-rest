from rest_framework import serializers
from .models import Cart
from .modelsFacture import Factures

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'
        
class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factures
        fields = '__all__'