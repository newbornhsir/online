from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse,Http404,HttpResponseRedirect
from django.template import loader
from django.core.urlresolvers import reverse
# Create your views here.
from .models import Question,Choice
def hello(request):
	latest_question_list = Question.objects.order_by('-pub_date')[:5]
	# output = ", ".join([q.question_text for q in latest_question_list])
	# return HttpResponse(output)
	# template = loader.get_template('polls/index.html')
	context = {
		'latest_question_list': latest_question_list
	}
	# return HttpResponse(template.render(context,request))
	return render(request,'polls/index.html',context)

def detail(request,id):
	# try:
	# 	question = Question.objects.get(pk=id)
	# except Question.DoesNotExist:
	# 	raise Http404("question does not exist")
	question = get_object_or_404(Question,pk=id)
	# return HttpResponse("you are looking at %s" %question)
	return render(request,"polls/detail.html",{"question":question})

def results(request,id):
	res = "your are looking at the results of question %s"
	return HttpResponse(res % id)

def vote(request,id):
	question = get_object_or_404(Question, pk=id)
	try:
		selected_choice = question.choice_set.get(pk=request.POST['choice'])
	except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
		return render(request, 'polls/detail.html', {
			'question': question,
			'error_message': "You didn't select a choice.",
		})
	else:
		selected_choice.votes+=1
		selected_choice.save()
		# Always return an HttpResponseRedirect after successfully dealing
		# with POST data. This prevents data from being posted twice if a
		# user hits the Back button.
		return HttpResponseRedirect(reverse('polls:results', args=(id,)))