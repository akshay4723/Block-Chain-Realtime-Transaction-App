from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('get-transactions/', views.get_transaction),
    path('do-transaction/', views.do_transaction)
]