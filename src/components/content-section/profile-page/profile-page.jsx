import styles from './profile-page.module.css';
import ProfileIntroBackground from './profile-intro-background/profile-intro-background';
import ProfileInfo from './profile-info/profile-info';

const ProfilePage = (props) => {
    return (
        <div className={styles.Profile_page}>
            <ProfileIntroBackground />
        </div>
    );
}

export default ProfilePage;