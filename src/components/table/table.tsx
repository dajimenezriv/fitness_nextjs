import { ReactNode } from 'react';
import styles from './table.module.scss';

interface Props {
  title: string,
  children: ReactNode,
}

export default function Table({
  title,
  children,
}: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th colSpan={100}>{title}</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}