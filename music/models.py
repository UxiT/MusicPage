from django.db import models

# Create your models here.


class Song(models.Model):
    title = models.CharField(max_length=50)
    band = models.CharField(max_length=50)
    audio = models.FileField(upload_to='audio/' ,blank=True)
    lyrics = models.TextField(null=True, blank=True)
    slug = models.SlugField(unique=True, blank=True, null=True)

    def __str__(self):
        return self.title



class Album(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True)
    songs = models.ManyToManyField('Song')
    cover = models.FileField(blank=True)

    def __str__(self):
        return self.title
