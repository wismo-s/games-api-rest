from rest_framework.documentation import include_docs_urls
from django.urls import path
from user import views


urlpatterns = [
    path('register/', views.CustomUserRegisterView.as_view(), name="register"),
    path('login/', views.CustomUserLoginView.as_view(), name="login"),
    path('logout/', views.CustomUserLogoutView.as_view(), name="logout"),
    path('user/', views.CustomUserView.as_view(), name="user"),
    path('docs/user/', include_docs_urls(title="userAPI"))
]