from django.db import models
import uuid
# Create your models here.


class Transactions(models.Model):
    senderuid = models.CharField(max_length=100)
    receiveruid = models.CharField(max_length=100)
    amount = models.IntegerField()
