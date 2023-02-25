import styles from './all-posts.module.css'
import PostGrid from './post-grid'
export default function AllPosts(props){
    return <section className={styles.posts}>
  <h1>All Posts</h1>
  <PostGrid posts={props.posts} />
    </section>
} 