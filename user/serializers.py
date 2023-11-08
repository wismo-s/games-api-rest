from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError

User_model = get_user_model()

class CustomUserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_model
        fields = ['username', 'email', 'password', 'image_perfil', 'first_name', 'last_name']
    def create(self, validated_data):
        user = User_model.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            image_perfil =validated_data['image_perfil'],
            first_name =validated_data['first_name'],
            last_name =validated_data['last_name'],
        )
        user.username = validated_data['username']
        user.save()
        return user

class CustomUserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    class Meta:
        pass 
    def check_user(self, validated_data):
        user = authenticate(username=validated_data['username'], password=validated_data['password'])
        if not user:
            raise ValidationError('user not found')
        return user
    
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_model
        fields = ('username', 'image_perfil', 'cart', 'id', 'email', 'first_name', 'last_name')