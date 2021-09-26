from django.shortcuts import render

def project(request):
  context = {
    
  }
  return render(request, "project/project.html", context)
