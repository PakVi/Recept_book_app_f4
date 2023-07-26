from rest_framework import generics
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ['get']


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names = ['get']


class RecipeList(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    http_method_names = ['get']


class RecipeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    http_method_names = ['get']


class RecipeByCategoryList(generics.ListAPIView):
    serializer_class = RecipeSerializer
    http_method_names = ['get']

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Recipe.objects.filter(category_id=category_id)
