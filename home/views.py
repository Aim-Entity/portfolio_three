from django.shortcuts import render
from .models import Testimonial, ClientC1, ClientC2, ClientC3, ClientC4, ClientC5, Slider


def index(request):
    clients1 = ClientC1.objects.all()
    clients2 = ClientC2.objects.all()
    clients3 = ClientC3.objects.all()
    clients4 = ClientC4.objects.all()
    clients5 = ClientC5.objects.all()
    testimonials = Testimonial.objects.all()
    sliders = Slider.objects.all()[:3]

    context = {
        "clients1": clients1,
        "clients2": clients2,
        "clients3": clients3,
        "clients4": clients4,
        "clients5": clients5,
        "testimonials": testimonials,
        "sliders": sliders
    }
    return render(request, "home/home.html", context)


def credits(request):
    return render(request, "home/credits.html")
