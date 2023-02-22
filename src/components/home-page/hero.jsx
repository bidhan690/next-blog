import Image from 'next/image'
import styles from './hero.module.css'

export default function Hero(){
  return <>
    <section className={styles.hero} >
        <div className={styles.image}>
            <Image src='/images/site/pp.png' height={500} width={500} />
        </div>
        <h1>Hi, I'm Bidhan </h1>
        <p>
            I blog about web and app development - especially frontend frameworks like react and flutter.
        </p>
    </section>
    </>
}