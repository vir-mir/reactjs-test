# -*- coding: utf-8 -*-

from django.shortcuts import render


def home_views(request):
    return render(request, 'site/main.html')