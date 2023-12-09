from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, status
from .forms import ContactForm
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics, status
from .forms import ContactForm
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

@api_view(['GET', 'POST'])
def submit_contact_form(request):
    if request.method == 'POST':
        form = ContactForm(request.data, request.FILES)

        if form.is_valid():
            submission = form.save()

            # Serialize the submission data
            serializer = ContactSubmissionSerializer(submission)

            return Response({'message': 'Form submitted successfully!', 'data': serializer.data}, status=status.HTTP_201_CREATED)
        else:
            errors = dict(form.errors.items())
            return Response({'error': 'Form submission failed. Please check your input.', 'errors': errors}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        # Handle GET request logic here
        submissions = ContactSubmission.objects.all()
        serializer = ContactSubmissionSerializer(submissions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
class ContactSubmissionList(generics.ListAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

class ContactSubmissionDetail(generics.RetrieveAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

class ContactSubmissionUpdate(generics.UpdateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

class ContactSubmissionDelete(generics.DestroyAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
