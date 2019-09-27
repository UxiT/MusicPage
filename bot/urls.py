from django.urls import path
from .views import arr

urlpatterns = [
    path('', arr, name='bot_url')
]