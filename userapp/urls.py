from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from django.urls import path, include
from .views import UserProfileViewSet

#router create
router = routers.DefaultRouter()
router.register(r'userprofiles', UserProfileViewSet, basename='userprofile')

urlpatterns = [
    path('api/V1/', include(router.urls)),
    path('docs/', include_docs_urls('GamesAPI'))
]
