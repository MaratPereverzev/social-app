import styles from './content-section.module.css';
import ProfilePage from './profile-page/profile-page';

const ContentSection = () => {
    return (
        <div className={styles.ContentSection}>
            <ProfilePage name='Oleg'/>
        </div>
    );
}

export default ContentSection;