import AllPosts from '../../components/posts/all-posts'
import Head from 'next/head'
import { getAllPosts } from '../../lib/post-util'


export default function AllPostPage(props) {
    return <>
        <Head>

            <title>All Posts</title>
        </Head>
        <AllPosts posts={props.posts} />
    </>
}

export function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts
        },
        revalidate: 100


    }

}