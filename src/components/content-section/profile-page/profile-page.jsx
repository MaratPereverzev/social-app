import styles from './profile-page.module.css';
import ProfileIntroBackground from './profile-intro-background/profile-intro-background';
import ProfileInfo from './profile-info/profile-info';
import ProfilePosts from './profile-posts/profile-posts';

const ProfilePage = (props) => {
    return (
        <div className={styles.Profile_page}>
            <ProfileIntroBackground profile_intro_background={props.profile_page.profile_intro_background}/>
            <ProfileInfo profile_info={props.profile_page.profile_info}/>
            <ProfilePosts post_images={props.profile_page.post_images}/>

        </div>
    );
}

export default ProfilePage;