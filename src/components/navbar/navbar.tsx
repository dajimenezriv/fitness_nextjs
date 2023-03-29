import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Image
        src="images/menu.svg"
        width={30}
        height={30}
        alt="menu"
      />

      <div className={styles.links}>
        <Link href="/nutrition">Foods</Link>
        <Link href="/nutrition/new">New Food</Link>
      </div>

      <Link href="/profile">
        <Image
          src="images/profile.svg"
          width={50}
          height={50}
          alt="profile"
        />
      </Link>
    </div>
  )
}
