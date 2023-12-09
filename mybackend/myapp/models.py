# myapp/models.py
from django.db import models

class ContactSubmission(models.Model):
    name = models.CharField(max_length=255)
    surname = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15, blank=True, null=True)
    sector = models.CharField(max_length=20, choices=[
        ('webDev', 'Web Development'),
        ('seo', 'SEO Service'),
        ('smm', 'SMM Service'),
    ])
    description = models.TextField()
    document = models.FileField(upload_to='documents/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} {self.surname} - {self.email}"
