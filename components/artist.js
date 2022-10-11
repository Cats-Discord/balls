import styles from '../styles/Home.module.css';

export default function Album(props) {
  return (
    <>
    <h1 data-text={props.name} className="rainbowText">{props.name}<span><img height='200px' className={styles.rightme} src={props.image} alt="Picture" /></span></h1>
    </>
  );
}
