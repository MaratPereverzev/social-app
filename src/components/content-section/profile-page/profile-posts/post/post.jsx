import styles from './post.module.css';
import photo from './lofi-girl-studying-wallpaper-3840x2160_54.jpg';

const Post = () => {
    return (
        <div className={styles.post}>
            <img src={photo} className={styles.post_photo} alt="post" />
        </div>
    );
}
export default Post;