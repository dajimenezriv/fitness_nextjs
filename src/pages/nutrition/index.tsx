import Table from '@/components/table/table';
import { getFoods } from '@/lib/nutrition';
import { selectState } from '@/store/store';
import { Food } from '@/types/models';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';

const keys: Array<keyof Food> = [
  'name',
  'calories',
  'carbs',
  'proteins',
  'fats',
]

interface Props {
  foods: Array<Food>,
}

export default function Nutrition({
  foods
}: Props) {
  // const { foods } = useSelector(selectState).nutrition;

  return (
    <>
      <Table title='Foods'>
        <tr className={styles.subtitle}>
          {(keys).map((key) => (
            <td key={key}>{key}</td>
          ))}
        </tr>

        {(foods).map((food) => (
          <tr key={food.id}>
            {(keys).map((key) => {
              if (key === 'name') return (
                <td key={`${food.id}${key}`}>
                  <Link href={`/nutrition/${food.id}`}>
                    {food[key]}
                  </Link>
                </td>
              )

              return (
                <td key={`${food.id}${key}`}>
                  {food[key]}
                </td>
              )
            })}
          </tr>
        ))}
      </Table>
    </>
  );
}

// Static Generation
export async function getStaticProps() {
  const foods = await getFoods();
  return {
    props: {
      foods,
    },
  };
}
