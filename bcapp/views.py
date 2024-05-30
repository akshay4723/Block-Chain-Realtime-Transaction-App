from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Transactions
from .serialiser import TrasnsactionSerialiser
from rest_framework.response import Response

# Create your views here.


@api_view(['GET'])
def get_transaction(request):
    Item = Transactions.objects.all()
    serialiser = TrasnsactionSerialiser(Item, many = True)
    return Response(serialiser.data)

@api_view(['POST'])
def do_transaction(request):
    serialiser = TrasnsactionSerialiser(data = request.data)
    if serialiser.is_valid():
        serialiser.save()
        return Response(serialiser.data)