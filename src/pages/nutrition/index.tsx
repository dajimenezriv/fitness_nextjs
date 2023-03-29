import Table from '@/components/table/table';
import { selectState } from '@/store/store';
import { Food } from '@/types/models';
import { useSelector } from 'react-redux';
import styles from './nutrition.module.scss';

const keys: Array<keyof Food> = [
  'name',
  'calories',
  'carbs',
  'proteins',
  'fats',
]

export default function Nutrition() {
  const { foods } = useSelector(selectState).nutrition;

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
            {(keys).map((key) => (
              <td key={`${food.id}${key}`}>{food[key]}</td>
            ))}
          </tr>
        ))}
      </Table>
    </>
  );
}
