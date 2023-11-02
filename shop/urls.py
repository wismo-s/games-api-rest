from django.urls import include, path
from rest_framework import routers
from shop import views

router = routers.DefaultRouter()
router.register(r'cart', views.CartViewSets, basename='cart')

urlpatterns = [
    path('', include(router.urls))
]
