from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError

User_model = get_user_model()

class CustomUserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_model
        fields = '__all__'
    def create(self, clean_data):
        user = User_model.objects.create_user(username=clean_data['username'], clean_data=clean_data['set_password'])
        user.save()
        return user

class CustomUserLoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def check_user(self, clean_data):
        user = authenticate(username=clean_data['username'], password=clean_data['password'])
        if not user:
            raise ValidationError('user not found')
        return user
    
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_model
        fields = ('username', 'image_perfil')