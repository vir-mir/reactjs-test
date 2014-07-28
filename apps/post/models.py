# -*- coding: utf-8 -*-

from django.db import models
from django.contrib.auth import get_user_model
from apps.blog.models import Blog

class Post(models.Model):
    title = models.CharField(verbose_name=u"Название", max_length=255)
    url = models.SlugField(verbose_name=u"Url поста", max_length=255, null=True, blank=True)
    text = models.TextField(verbose_name=u"Текст поста")
    view = models.IntegerField(verbose_name=u"Количество просмотров", max_length=11, null=True, blank=True, default=1)
    active = models.BooleanField(verbose_name=u"Активный?", default=1)
    date = models.DateTimeField(verbose_name=u"Дата написание поста")
    user = models.ForeignKey(get_user_model())
    blog = models.ForeignKey(Blog)

    s_title = models.CharField(verbose_name=u"SEO заголовок", max_length=255)
    s_keyword = models.CharField(verbose_name=u"SEO ключи", max_length=255)
    s_description = models.CharField(verbose_name=u"SEO описание", max_length=255)
