import Navbar from '@/components/navbar/navbar';
import { ReactNode } from 'react';
import styles from './navbar.module.scss';

interface Props {
  children: ReactNode,
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  )
}
