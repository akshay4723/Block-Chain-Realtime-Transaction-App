# Generated by Django 5.0.4 on 2024-05-23 17:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bcapp', '0003_transactions_hash'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transactions',
            name='hash',
        ),
    ]
