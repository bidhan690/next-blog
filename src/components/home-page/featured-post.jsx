import styles from './featured-post.module.css'
import PostGrid from '../posts/post-grid'

export default function FeaturedPost (props){
     return <section className={styles.latest}>
    <h2>
        Featured Post 
    </h2>
     <PostGrid posts={props.posts} />
     </section>
}

