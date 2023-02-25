import styles from '../posts/post-grid.module.css'
import PostItem from './post-item'

export default function PostGrid(props){
const {posts} = props;

    return <ul className={styles.grid}>
    {posts.map(data=> <PostItem key={data.slug} post={data} /> )}
    </ul>
}

