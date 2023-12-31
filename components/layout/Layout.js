import Link from 'next/link';
import styles from './Layout.module.css';

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/">BotoFood</Link>
            </div>
            <div className={styles.right}>
                <Link href="/menu">menu</Link>
                <Link href="/categories">categories</Link>
            </div>
        </header>
        <div className={styles.container}>{children}</div>            
        <footer className={styles.footer}>
            <a href="https://botostart.ir" target='_blank'>botostart </a>
            NextJs course | BotoFood project &copy;
        </footer>
    </>
  )
}

export default Layout