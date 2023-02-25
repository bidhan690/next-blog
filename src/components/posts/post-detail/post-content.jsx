import ReactMarkdown from 'react-markdown';
import styles from './post-content.module.css';
import PostHeader from './post-header';

import Image from 'next/image';


export default function PostContent(props) {
  const post = props.posts;
  const ob = {
    paragraph(paragraph) {
      const {node} = paragraph;

      if (node.children[0].type === 'img') {
        const img = node.children[0];
        return (
          <div className={styles.image}>
            <Image src={img.url} alt={img.alt} height={300} width={800} />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    // code(code) {
    //   const {language, value} = code;
    //   return <SyntaxHighlighter language={language} style={a11yDark} children={value} />;
    // },
  };

  return (
    <>
     
      <article className={styles.content}>
        <PostHeader title={post.title} image={post.image} />
        <ReactMarkdown components={ob}>{post.content}</ReactMarkdown>
      </article>
    </>
  );
}
