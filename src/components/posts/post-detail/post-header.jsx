import styles from './post-header.module.css';
import Image from 'next/image';

export default function PostHeader(props) {
  const {title, image} = props;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={200} width={150} />
    </header>
  );
}
