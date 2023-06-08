import styles from './message.module.css';

const Message = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.person_photo}>
                    <img src={props.src} alt='person icon'></img>
            </div>
            <div className={styles.text}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum placeat provident,
                     sunt laudantium voluptatem autem, unde beatae, culpa voluptate corrupti distinctio quaerat. 
                     Eaque aliquid voluptatem explicabo adipisci amet eligendi.Lorem ipsum dolor sit amet consectetur 
                     adipisicing elit. Ipsum eum placeat provident,
                     sunt laudantium voluptatem autem, unde beatae, culpa voluptate corrupti distinctio quaerat. 
                     Eaque aliquid voluptatem explicabo adipisci amet eligendi.</p>
            </div>
        </div>
    );
}

export default Message;