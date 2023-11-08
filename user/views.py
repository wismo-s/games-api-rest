from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.authentication import SessionAuthentication
from django.contrib.auth import get_user_model, login, logout
from rest_framework import permissions, status
from .serializers import CustomUserLoginSerializer, CustomUserRegisterSerializer, CustomUserSerializer
from .validations import customValidation, validateUsername, validatePassword
from shop.models import Cart
from shop.modelsFacture import Factures
from shop.serializers import CartSerializer, FacturaSerializer
Customuser = get_user_model()

class CustomUserRegisterView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request):
        serializer = CustomUserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            image_perfil = serializer.validated_data['image_perfil']
            first_name = serializer.validated_data['first_name']
            last_name = serializer.validated_data['last_name']
            print(image_perfil)
            user = Customuser.objects.create_user(username=username, email=email, password=password, image_perfil=image_perfil, first_name=first_name, last_name=last_name)
            return Response({'message': f'User {user.username} created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomUserLoginView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    
    def post(self, request):
        data = request.data
        if validateUsername(data) and validatePassword(data):
            serializer = CustomUserLoginSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                user = serializer.check_user(data)
                login(request, user)
                token, created = Token.objects.get_or_create(user=user)  
                return Response({'token': token.key}, status=status.HTTP_200_OK)  
        return Response(status=status.HTTP_400_BAD_REQUEST)

class CustomUserLogoutView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class CustomUserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)
    
    def get(self, request):
        user = request.user
        serializer = CustomUserSerializer(user)
        
        cart = Cart.objects.filter(id=serializer.data['cart']).first()
        facture = Factures.objects.filter(user=user.id)
        if facture:
            facture_data = [FacturaSerializer(factura).data for factura in facture]
        else:
            facture_data = None
        if cart:
            cart_serializer = CartSerializer(cart)
            cart_data = cart_serializer.data
        else:
            cart_data = None
        user_data = serializer.data
        response_data = {'user': user_data, 'cart': cart_data['games'], 'facture': facture_data}
        return Response(response_data, status=status.HTTP_200_OK)
