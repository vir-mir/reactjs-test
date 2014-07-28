# -*- coding: utf-8 -*-

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    token = models.CharField(verbose_name=u"token", max_length=180, null=True, blank=True)
    time_token = models.IntegerField(verbose_name=u"Валидность токена", max_length=11, null=True, blank=True)
