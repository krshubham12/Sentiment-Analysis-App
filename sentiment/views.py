from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# Create your views here.
def sentiment_scores(sentence):
    sid_obj = SentimentIntensityAnalyzer()
    sentiment_dict = sid_obj.polarity_scores(sentence)
    # decide sentiment as positive, negative and neutral
    if sentiment_dict['compound'] >= 0.05:
        sentiment = "pos"
        sentiment_tag = "Positive"
    elif sentiment_dict['compound'] <= - 0.05:
        sentiment = "neg"
        sentiment_tag = "Negative"
    else:
        sentiment = "neu"
        sentiment_tag = "Neutral"

    return sentiment_tag, sentiment_dict[sentiment]

@api_view(['POST'])
def apiRequest(request):
    try:
        sentiment, confidence = sentiment_scores(request.data["text"])
        # data = [{'sentiment': sentiment, 'confidence': confidence}]
        return Response({'sentiment': sentiment, 'confidence': confidence})
    except KeyError:
        return Response({'sentiment': 'Neutral', 'confidence': 0})
