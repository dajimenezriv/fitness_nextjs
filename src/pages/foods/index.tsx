import Table from '@/components/table/table';
import { getFoods } from '@/lib/foods';
import { selectState } from '@/store/store';
import { Food } from '@/types/models';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './index.module.scss';
import LeftPanel from '@/components/left_panel/left_panel';

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

export default function Foods({
  foods
}: Props) {
  // const { foods } = useSelector(selectState).foods;

  return (
    <div className={styles.container}>
      <LeftPanel>
        Hola
      </LeftPanel>

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
                  <Link href={`/foods/${food.id}`}>
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
    </div>
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
