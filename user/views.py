from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth import get_user_model, login, logout
from rest_framework import permissions, status
from .serializers import CustomUserLoginSerializer, CustomUserRegisterSerializer, CustomUserSerializer
from .validations import customValidation, validateUsername, validatePassword
Customuser = get_user_model()

class CustomUserRegisterView(APIView):
    def post(self, request):
        serializer = CustomUserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = Customuser.objects.create_user(username=username, email=email, password=password)
            return Response({'message': f'User {user.username} created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomUserLoginView(APIView):
    def post(self, request):
        data = request.data
        if validateUsername(data) and validatePassword(data):
            serialiser = CustomUserLoginSerializer(data=data)
            if serialiser.is_valid(raise_exception=True):
                user = serialiser.check_user(data)
                login(request, user)
                return Response(serialiser.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class CustomUserLogoutView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
 
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class CustomUserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    
    def get(self, request):
        serializer = CustomUserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
