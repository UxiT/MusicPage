from django.shortcuts import render
from .models import Album
import re


def main(request):
    albums = Album.objects.all()
    return render(request, 'music/index.html', context={'Albums': albums})


def album_detail(request, slug):
    album = Album.objects.get(slug__iexact=slug)
    Songs = album.songs.all()
    cover = album.cover
    title = album.title
    return render(request, 'music/satt.html', {'songs':Songs, 'cover':cover, 'title':title})
