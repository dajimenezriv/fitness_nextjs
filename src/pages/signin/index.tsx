import { getProviders, getSession, signIn } from 'next-auth/react';
import styles from './index.module.scss';
import Image from 'next/image';
import type { Providers } from '@/types/auth';
import { ReactElement } from 'react';
import Empty from '@/components/layout/empty';
import { GetServerSideProps } from 'next';

interface Props {
  providers: Providers
}

export default function SignIn({ providers }: Props) {
  return (
    <div className={styles.signin}>
      <div className={styles.form}>
        {Object.entries(providers).map(([provider, info]) => (
          <button
            key={provider}
            className={styles.provider}
            onClick={() => signIn(info.id)}
          >
            <span>Sign in with {info.name}</span>
            <Image
              src={`images/${provider}.svg`}
              width={20}
              height={20}
              alt="github"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    };
  }

  return {
    props: {
      providers,
    },
  }
};

SignIn.getLayout = function getLayout(page: ReactElement) {
  return (
    <Empty>
      {page}
    </Empty>
  );
}
