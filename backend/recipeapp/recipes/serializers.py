from rest_framework import serializers
from rest_framework.relations import StringRelatedField

from .models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class RecipeSerializer(serializers.ModelSerializer):
    category = StringRelatedField(many=False)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'category', 'category_id', 'photo', 'description', 'ingredients', 'recipe']
