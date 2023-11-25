
import dynamic from 'next/dynamic';
import styles from './page.module.css'
import Projects from './projects';

const Earth = dynamic(() => import('./earth'), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>
})

export default function Home() {

  return (
    <main className={styles.main}>
        <Earth />
        <Projects />
    </main>
  )
}
