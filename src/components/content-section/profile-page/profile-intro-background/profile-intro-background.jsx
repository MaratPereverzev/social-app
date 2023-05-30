import styles from './profile-intro-background.module.css';
import image from './lofi-chill-bedroom-wallpaper-2880x1800_8.jpg';

const ProfileIntroBackground = () => {
    return (
        <div className={styles.background_photo}>
            <img className={styles.profile_intro_background} src={image} alt='profile intro background' />
        </div>
    );
}

export default ProfileIntroBackground;