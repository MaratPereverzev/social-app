import styles from './profile-info.module.css';
import image from '../profile-intro-background/lofi-chill-bedroom-wallpaper-2880x1800_8.jpg';

const ProfileInfo = (props) => {
    return (
        <div className={styles.profile_info}>
            <img className={styles.profile_avatar} src={image} alt='avatar'/>
            <div className={styles.profile_status}>
                <h2>{props.name}</h2>
                <h3>age: {props.age}</h3>
                <h3>status: {props.status}</h3>
                <h3>bio: {props.status}</h3>
            </div>
         </div>
    );
}

export default ProfileInfo;