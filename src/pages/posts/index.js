import AllPosts from '../../components/posts/all-posts'
import Head from 'next/head'
import { getAllPosts } from '../../lib/post-util'


export default function AllPostPage(props) {
    return <>
        <Head>
        <meta name='description' content='I post about programming and web development  '  />
            <title>All Posts</title>
        </Head>
    
        <AllPosts posts={props.posts} />
        <div align="center">
     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9623403163189751"
     crossOrigin="anonymous"></script>
    <ins className="adsbygoogle"
      style={{display:'block'}}
     data-ad-client="ca-pub-9623403163189751"
     data-ad-slot="6511144828"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
     </div>

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