import Link from "next/link";
import Image from "next/image";
import styles from "./post-item.module.css"

export default function PostItem(props){
  const {title,image,date,excerpt,slug} = props.post;
  const formattedDate = new Date(date).toDateString('en-US',{
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const fullImagePath = `/images/post${slug}/${image}`
    return <li className={styles.post}>
        <Link href='/'>
           <div className={styles.image}>
           <Image src={fullImagePath} alt={props.title} width={500} height={500} />
           </div>
            <div className={styles.content}>
                <h3>{props.title}</h3>
           <time>{formattedDate}</time>
           <p>{props.excerpt}</p>
            </div>
        </Link>
    </li>
}