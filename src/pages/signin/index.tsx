import { getProviders, getSession, signIn } from 'next-auth/react';
import styles from './index.module.scss';
import Image from 'next/image';
import type { Providers } from '@/types/auth';

interface Props {
  providers: Providers
}

export default function SignIn({ providers }: Props) {
  return (
    <div className={styles.signin}>
      <div className={styles.form}>
        {Object.entries(providers).map(([provider, info]) => (
          <div key={provider}>
            <button
            // onClick={() => signIn(info.id)}
            >
              <Image
                src={`images/${provider}.svg`}
                width={50}
                height={50}
                alt="github"
              />
              <span>Sign in with {info.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  const providers = await getProviders();
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  return {
    props: {
      providers,
    },
  }
}
