# -*- coding: utf-8 -*-

__author__ = 'vir-mir'

from apps.restful import views
from apps.post.models import Post
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@views.method(['GET', 'POST'])
def posts(request, version, method="GET"):
    data = {}
    status = 404

    if method == 'GET':
        data, status = __posts_get(request)
    elif method == 'POST':
        data, status = __posts_post(request)

    return views.views(request, data=data, status=status)


def __posts_post(request):
    data = {}
    status = 201

    return data, status


def __posts_get(request):
    data = []
    status = 200

    posts = Post.objects.filter(active=1)

    if posts:
        for post in posts:
            post_output = {
                u'id': post.id,
                u'title': post.title,
                u'url': post.url,
                u'description': post.description,
                u'view': post.view,
            }
            data.append(post_output)

    return data, status