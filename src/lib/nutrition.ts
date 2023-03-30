import { createFoods } from '@/testing/models';
import { Food } from '@/types/models';
import axios from 'axios';

export async function fetchFoods() {
  const res = await axios.get<{
    foods: Array<Food>
  }>('http://localhost:3000/api/nutrition/foods');
  const { foods } = res.data;
  return foods;
}

export async function getFoods() {
  return await fetchFoods();
}

export async function getFood(id: number) {
  const foods = await fetchFoods();
  return foods.find((food) => food.id === id);
}
