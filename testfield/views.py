from django.shortcuts import render


def htmlrender(request):
    return render(request, 'testfield/index.html')
