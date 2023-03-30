import { createFoods } from '@/testing/models';
import { Food } from '@/types/models';
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse<{
    foods: Array<Food>,
  }>
  ) {
  res.status(200).json({ foods: createFoods(10) });
}