import NextErrorComponent from 'next/error';

export default function Custom404() {
  return <NextErrorComponent statusCode={404} title={'Custom 404 - Page Not Found'} />;
}

// https://github.com/i18next/next-i18next/issues/677
// We can't use getServerSideProps on 404 page
// export async function getServerSideProps(context: GetServerSideProps) {
//   return {
//     path: '/nutrition',
//   };
// }
