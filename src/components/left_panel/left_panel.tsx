import { ReactNode } from 'react';
import styles from './left_panel.module.scss';

interface Props {
  children: ReactNode,
}

export default function LeftPanel({ children }: Props) {
  return (
    <div className={styles.left_panel}>
      {children}
    </div>
  )
}
