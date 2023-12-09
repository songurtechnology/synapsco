from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    submit_contact_form,
    ContactSubmissionList,
    ContactSubmissionDetail,
    ContactSubmissionUpdate,
    ContactSubmissionDelete,
)

app_name = 'myapp'

urlpatterns = [
    path('submit-contact-form/', submit_contact_form, name='submit_contact_form'),
    path('contact-submissions/', ContactSubmissionList.as_view(), name='contact_submission_list'),
    path('contact-submissions/<int:pk>/', ContactSubmissionDetail.as_view(), name='contact_submission_detail'),
    path('contact-submissions/<int:pk>/update/', ContactSubmissionUpdate.as_view(), name='contact_submission_update'),
    path('contact-submissions/<int:pk>/delete/', ContactSubmissionDelete.as_view(), name='contact_submission_delete'),
    # Add other URLs as needed
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


