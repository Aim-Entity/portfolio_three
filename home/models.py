from django.db import models


class ClientC1(models.Model):
    image = models.ImageField(upload_to="past_clients")
    link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.image.url


class ClientC2(models.Model):
    image = models.ImageField(upload_to="past_clients")
    link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.image.url


class ClientC3(models.Model):
    image = models.ImageField(upload_to="past_clients")
    link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.image.url


class ClientC4(models.Model):
    image = models.ImageField(upload_to="past_clients")
    link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.image.url


class ClientC5(models.Model):
    image = models.ImageField(upload_to="past_clients")
    link = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.image.url


class Testimonial(models.Model):
    rating = models.FloatField()
    quote = models.CharField(max_length=3000)
    title = models.CharField(max_length=300)

    def __str__(self):
        return self.title
