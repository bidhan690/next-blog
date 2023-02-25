import PostContent from "../../components/posts/post-detail/post-content"
import { getData, getPostFiles } from '../../lib/post-util'


export default function SpecificPostsPage(props) {
    const postss = props.posts
    return <PostContent posts={postss} />

}

export function getStaticProps(context) {
    const { params } = context
    const { slug } = params

    const data = getData(slug)
    return {
        props: {
            posts: data
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFiles = getPostFiles()
    const slugs = postFiles.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false,
    }
}