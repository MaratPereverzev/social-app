import styles from './profile-posts.module.css';

const ProfilePosts = (props) => {
    return (
        <div className={styles.profile_posts}>
            {props.post_images}
        </div>
    );
}

export default ProfilePosts;