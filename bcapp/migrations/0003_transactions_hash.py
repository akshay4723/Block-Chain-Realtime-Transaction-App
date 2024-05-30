# Generated by Django 5.0.4 on 2024-05-23 17:19

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bcapp', '0002_remove_transactions_datetime'),
    ]

    operations = [
        migrations.AddField(
            model_name='transactions',
            name='hash',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True),
        ),
    ]
