import Hero from '../components/home-page/hero'
import FeaturedPost from '../components/home-page/featured-post'
import { getFeaturedPosts } from '../lib/post-util'


export default function HomePage(props) {
  const posts = props.posts
  return (
    <>
      <Hero />
      <FeaturedPost posts={posts} />
    </>
  )
}


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 100


  }

}