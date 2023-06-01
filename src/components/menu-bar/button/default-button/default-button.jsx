import styles from './default-button.module.css';
const DefaultButton = (props) => {
    return (
        <div className={styles.default_button}>
            <img src={props.src} className={styles.button} alt={props.alt} />
        </div>
    );
}

export default DefaultButton;