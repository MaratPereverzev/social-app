import styles from './person-block.module.css';
import {NavLink} from 'react-router-dom';

const PersonBlock = (props) => {
    return (
        <NavLink to={`${props.id}`}>
            <div className={styles.person_block}>
                <div className={styles.person_photo}>
                    <img src={props.src} alt='person icon'></img>
                </div>
                <div className={styles.person_name}>
                    <h2>{props.name}</h2>
                    <p>asdf</p>
                </div>
            </div>
        </NavLink>
    );
}
export default PersonBlock;