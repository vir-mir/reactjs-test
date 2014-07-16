# -*- coding: utf-8 -*-

from django.conf.urls import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from django.conf import settings
admin.autodiscover()


urlpatterns = patterns('')

urlpatterns = patterns(
    '',
    url(r'^$', 'apps.home.views.home_views', name='home'),
    url(r'^admin/', include(admin.site.urls)),
    #url(r'^tinymce/', include('tinymce.urls')),
)

if settings.DEBUG:
    urlpatterns += patterns(
        '',
        url(r'^admin/doc/$', include('django.contrib.admindocs.urls')),
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    )


urlpatterns += staticfiles_urlpatterns()