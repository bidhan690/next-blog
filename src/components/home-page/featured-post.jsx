import styles from './featured-post.module.css'
import PostGrid from '../posts/post-grid'

export default function FeaturedPost (){
     return <section className={styles.latest}>
    <h2>
        Featured Post 
    </h2>
     <PostGrid/>
     </section>
}