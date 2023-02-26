import ReactMarkdown from "react-markdown";
import styles from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("js", js);

export default function PostContent(props) {
  const post = props.posts;
  const ob = {
    p: paragraph => {
      const { node } = paragraph
      
      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        return (
          <div className={styles.image}>
           <Image
	      src={image.properties.src}
	      width="768"
	      height="432"
	      alt={image.properties.alt}
	    />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
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
