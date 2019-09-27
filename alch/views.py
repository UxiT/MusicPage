from django.shortcuts import render
import datetime, calendar
from .models import Post

MONTH ={6:'June',
        7:'July'}


def upload(request, slug):
    post = Post.objects.get(slug__iexact=slug)
    return render(request, 'alch/try.html', context={'post':post})


def tableData(request):
    date = datetime.date.today()
    month = date.month
    year = date.year
    weekdays = calendar.monthcalendar(year, month)
    for i in range(len(weekdays)):
        for j in range(len(weekdays[i])):
            if weekdays[i][j] == 0:
                weekdays[i][j] = ' '

    return render(request, 'alch/index.html', context={
        'lines': [weekdays[0], weekdays[1], weekdays[2], weekdays[3], weekdays[4]],
        'month': MONTH.get(month),
        'day': date
    })
