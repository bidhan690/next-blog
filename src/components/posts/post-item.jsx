import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./post-item.module.css"

export default function PostItem(props){
  const {title,image,date,excerpt,slug} = props.post;
  const formattedDate = new Date(date).toDateString('en-US',{
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const fullImagePath = `/images/site/${image}`;
  const path = `/posts/${slug}`
    return <li className={styles.post}>
        <Link href={path}>
           <div className={styles.image}>
           <Image src={image} alt={title} width={300} height={200} layout='responsive' />
           </div>
            <div className={styles.content}>
                <h3>{title}</h3>
           <time>{formattedDate}</time>
           <p>{excerpt}</p>
            </div>
        </Link>
    </li>
}