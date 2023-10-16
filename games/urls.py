from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from django.urls import path, include
from games import views

# create routers
router = routers.DefaultRouter()
router.register(r'games', views.GamesViewSet, basename="games")
router.register(r'developers', views.DeveloperViewSet, basename="developers")
router.register(r'genders', views.GendersViewSet, basename="genders")


urlpatterns = [
    path('api/V1/', include(router.urls)),
    path('docs/', include_docs_urls(title="GamesAPI"))
]
