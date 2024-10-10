// src/api.js

const API_KEY = '1a3741a47f11486f8a94cef3b56c2841'; 
const BASE_URL = 'https://api.spoonacular.com/recipes';

// Receitas aleatórias
export const getRandomRecipes = async (number = 6) => {
  try {
    const response = await fetch(`${BASE_URL}/random?apiKey=${API_KEY}&number=${number}`);
    if (!response.ok) {
      throw new Error('Falha na requisição');
    }
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error('Erro ao buscar receitas aleatórias:', error);
    return [];
  }
};

// Receitas por nome
export const searchRecipes = async (query, number = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&number=${number}`);
    if (!response.ok) {
      throw new Error('Falha na requisição');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao pesquisar receitas:', error);
    return [];
  }
};

// Receita específica
export const getRecipeDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Falha na requisição');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter detalhes da receita:', error);
    return null;
  }
};

// Tipo de cozinha
export const getRecipesByCuisine = async (cuisine, number = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&cuisine=${cuisine}&number=${number}`);
    if (!response.ok) {
      throw new Error('Falha na requisição');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar receitas por cozinha:', error);
    return [];
  }
};

// Nutricionais de uma receita
export const getRecipeNutrition = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}/nutritionWidget.json?apiKey=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Falha na requisição');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter informações nutricionais:', error);
    return null;
  }
};

// Substitutos de ingredientes
export const getIngredientSubstitutes = async (ingredient) => {
  try {
    const response = await fetch(`${BASE_URL}/substitutes?apiKey=${API_KEY}&ingredientName=${ingredient}`);
    if (!response.ok) {
      throw new Error('Falha na requisição');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar substitutos de ingredientes:', error);
    return null;
  }
};