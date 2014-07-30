# -*- coding: utf-8 -*-

__author__ = 'vir-mir'


from django.shortcuts import HttpResponse
import json


def method(methods):
    def method_function(function):
        def function_is_method(*args, **kwargs):
            method_reqest = args[0].META['REQUEST_METHOD'].upper()
            kwargs['method'] = method_reqest
            if method_reqest in methods:
                return function(*args, **kwargs)
            else:
                return views(args[0], status=404)

        return function_is_method
    return method_function


def views(request, data={}, status=200, content_type='json'):

    if content_type == 'json':
        content_type = 'application/json'
    elif content_type == 'xml':
        content_type = 'text/xml'
    else:
        content_type = 'application/json'

    render = HttpResponse(json.dumps(data), mimetype=content_type, status=status)
    render['Cache-Control'] = 'no-cache, must-revalidate'
    render['Pragma'] = 'no-cache'

    return render