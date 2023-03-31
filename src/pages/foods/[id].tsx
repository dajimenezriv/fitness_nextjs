import { getFood, getFoods } from '@/lib/foods';
import { Food } from "@/types/models";

interface Props {
  food: Food,
}

import styles from './[id].module.scss';

export default function FoodComponent({ food }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.form}>
        {Object.entries(food).map(([key, value]) => (
          <div key={key} className={styles.field}>
            <div className={styles.key}>
              {key}
            </div>

            <div className={styles.value}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const foods = await getFoods();
  const paths = foods.map((food) => {
    return {
      params: {
        id: String(food.id),
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string
  },
}

export async function getStaticProps({ params }: GetStaticProps) {
  const food = await getFood(Number(params.id));
  return {
    props: {
      food,
    }
  }
}
