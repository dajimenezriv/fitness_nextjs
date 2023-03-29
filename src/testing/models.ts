import { Food } from '@/types/models';
import { getRandomInt } from '@/utils';

export const createFoods = (count: number) => {
  const min = 1;
  const max = 100;
  const res: Array<Food> = []
  for (let i = 0; i < count; i++) {
    res.push({
      id: i,
      name: `Food${i}`,
      calories: getRandomInt(min, max),
      carbs: getRandomInt(min, max),
      proteins: getRandomInt(min, max),
      fats: getRandomInt(min, max),
    })
  }
  return res;
};
