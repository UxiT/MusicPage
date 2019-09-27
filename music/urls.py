from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('album/<str:slug>/', views.album_detail, name='album_url')
]
 