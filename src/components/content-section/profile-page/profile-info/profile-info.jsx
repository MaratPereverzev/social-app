import styles from './profile-info.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={styles.profile_info}>
            <img className={styles.profile_avatar} src={props.profile_info.profile_avatar} alt='avatar'/>
            <div className={styles.profile_status}>
                <h2>{props.profile_info.name}</h2>
                <h3>age: {props.profile_info.age}</h3>
                <h3>status: {props.profile_info.status}</h3>
                <h3>bio: {props.profile_info.bio}</h3>
            </div>
         </div>
    );
}

export default ProfileInfo;