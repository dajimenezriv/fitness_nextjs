import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

export default function Navbar() {
  const session = useSession();

  const profileSrc = useMemo(() => {
    return session.data?.user?.image || 'images/profile.svg';
  }, [session]);

  return (
    <div className={styles.navbar}>
      <Image
        src="images/menu.svg"
        width={30}
        height={30}
        alt="menu"
      />

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/nutrition">Foods</Link>
        <Link href="/nutrition/new">New Food</Link>
      </div>

      <Link href="/profile">
        <Image
          className={styles.avatar}
          loader={() => profileSrc}
          unoptimized
          src={profileSrc}
          width={50}
          height={50}
          alt="profile"
        />
      </Link>
    </div>
  )
}
