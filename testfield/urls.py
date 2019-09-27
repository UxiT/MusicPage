from django.urls import path
from . import views

app_name = 'testfield'

urlpatterns =[
    path('', views.htmlrender),
]
