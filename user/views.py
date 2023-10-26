from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth import get_user_model, login, logout
from rest_framework import permissions, status
from .serializers import CustomUserLoginSerializer, CustomUserRegisterSerializer, CustomUserSerializer
from .validations import customValidation, validateUsername, validatePassword

class CustomUserRegisterView(APIView):
    def post(self, request):
        clean_data = customValidation(request.data)
        serializer = CustomUserRegisterSerializer(data=clean_data)
        if serializer.is_valid():
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomUserLoginView(APIView):
    def post(self, request):
        data = request.data
        if validateUsername(data) and validatePassword(data):
            serialiser = CustomUserLoginSerializer(data=data)
            if serialiser.is_valid():
                user = serialiser.check_user(data)
                login(request, user)
                return Response(serialiser.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class CustomUserLogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class CustomUserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    
    def get(self, request):
        serializer = CustomUserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
