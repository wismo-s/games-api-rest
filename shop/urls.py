from django.urls import include, path
from rest_framework import routers
from shop import views

router = routers.DefaultRouter()
router.register(r'cart', views.CartViewSets, basename='cart')
router.register(r'facture', views.FacturesViwsSet, basename='facture')

urlpatterns = [
    path('', include(router.urls))
]
