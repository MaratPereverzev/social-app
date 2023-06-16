import styles from './profile-intro-background.module.css';

const ProfileIntroBackground = (props) => {
    return (
        <div className={styles.background_photo}>
            <img className={styles.profile_intro_background} src={props.profile_intro_background} alt='profile intro background' />
        </div>
    );
}

export default ProfileIntroBackground;