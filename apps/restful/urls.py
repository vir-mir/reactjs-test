# -*- coding: utf-8 -*-
from django.conf.urls import patterns, url

__author__ = 'vir-mir'


urlpatterns = patterns(
    '',
    url(r'^posts/$', 'apps.restful.posts.views.posts', name='get list post')
)