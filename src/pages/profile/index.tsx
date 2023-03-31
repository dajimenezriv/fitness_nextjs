import { getProfile } from '@/lib/github';
import { Profile } from '@/types/github';
import { GetServerSideProps } from 'next';
import { getSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import styles from './index.module.scss';

interface Props {
  profile: Profile,
}

export default function ProfileComponent({ profile }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          className={styles.avatar}
          loader={() => profile.avatar_url}
          src={profile.avatar_url}
          unoptimized
          width={200}
          height={200}
          alt="Avatar"
        />
        <div>
          <div className={styles.name}>{profile.login}</div>
          <div className={styles.name}>{profile.name}</div>
          <div>{profile.bio}</div>
          <button className={styles.signout} onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      }
    }
  }

  const profile = await getProfile(session?.accessToken);
  return {
    props: {
      profile,
    }
  }
}
