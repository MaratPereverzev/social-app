import styles from './new-post-button.module.css';
const NewPostButton = () => {
    return (
        <div className={styles.new_post_button}>
            <button className={styles.button}>+</button>
        </div>
    );
}

export default NewPostButton;