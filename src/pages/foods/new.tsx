import { Food } from '@/types/models';
import { useState } from 'react';
import styles from './new.module.scss';

const emptyFood: Food = {
  name: '',
  calories: 0,
  carbs: 0,
  proteins: 0,
  fats: 0,
};

export default function New() {
  const [food, setFood] = useState<Food>(emptyFood)

  return (
    <div className={styles.new}>
      <div className={styles.form}>
        {Object.entries(food).map(([key, value]) => (
          <div key={key} className={styles.field}>
            <div>
              {key}
            </div>

            <input
              type="text"
              value={value}
              onChange={(e) => setFood({
                ...food,
                [key]: e.target.value,
              })}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
