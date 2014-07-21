# -*- coding: utf-8 -*-

__author__ = 'vir-mir'


from django.shortcuts import HttpResponse
import json


def views(request, data={}, status=200, content_type='json'):

    if content_type == 'json':
        content_type = 'application/json'
    elif content_type == 'xml':
        content_type = 'text/xml'
    else:
        content_type = 'application/json'

    return HttpResponse(json.dumps(data), mimetype=content_type, status=status)