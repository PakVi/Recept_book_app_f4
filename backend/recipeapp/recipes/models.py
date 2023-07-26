from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=32)

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name


class Recipe(models.Model):
    title = models.CharField(max_length=100)
    category = models.ForeignKey(Category, verbose_name="Категория", on_delete=models.CASCADE)
    photo = models.ImageField(verbose_name='Фото', default='default.jpg')
    description = models.TextField(default='', verbose_name='Описание')
    ingredients = models.TextField(default='', verbose_name='Ингридиенты')
    recipe = models.TextField(default='', verbose_name='Рецепт')

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'

    def __str__(self):
        return self.title
