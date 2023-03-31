import styles from './404.module.scss';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.error}>Custom 404 - Page Not Found</h1>
    </div>
  );
}

// https://github.com/i18next/next-i18next/issues/677
// We can't use getServerSideProps on 404 page
// export async function getServerSideProps(context: GetServerSideProps) {
//   return {
//     path: '/foods',
//   };
// }
