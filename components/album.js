import styles from '../styles/Art.module.css';

export default function Album(props) {
  return (
    <img className={styles.album} height='200px' width='200px' src={props.url} alt="Picture" />
  );
}
