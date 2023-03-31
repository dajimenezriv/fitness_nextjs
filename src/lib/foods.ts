import { createFoods } from '@/testing/models';
import type { Food } from '@/types/models';
import useSWR from 'swr';

const foods = createFoods(10);

export function useFoods() {
  const { data: foods } = useSWR<Array<Food>>('api/foods');
  return { foods };
}

export async function fetchFoods() {
  return foods;
}

export async function getFoods() {
  return foods;
}

export async function getFood(id: number) {
  return foods.find((food) => food.id === id);
}
