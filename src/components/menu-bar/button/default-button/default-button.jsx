import styles from './default-button.module.css';
const DefaultButton = (props) => {
    return (
        <div className={styles.default_button}>
            <a href="." className={styles.button}><img src={props.src} alt={props.alt} /></a>
        </div>
    );
}

export default DefaultButton;