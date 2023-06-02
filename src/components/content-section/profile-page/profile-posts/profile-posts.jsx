import styles from './profile-posts.module.css';
import Post from './post/post';

const ProfilePosts = () => {
    return (
        <div className={styles.profile_posts}>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default ProfilePosts;