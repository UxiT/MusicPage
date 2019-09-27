from django.urls import path
from . import views


app_name = "alch"

urlpatterns = [
    path('', views.tableData, name='post_list_url'),
    path('alch/<str:slug>/', views.upload, name='upload_url')
]
