import styles from './chat-block.module.css';
import Message from './message/message';
import photo from '../../profile-page/profile-intro-background/lofi-chill-bedroom-wallpaper-2880x1800_8.jpg';

let messageArray = [
    {src: photo, id: 1},
    {src: photo, id: 2},
    {src: photo, id: 3},
    {src: photo, id: 4},
    {src: photo, id: 5}
];
let messageJSX = messageArray.map(message => <Message src={message.src} id={message.id}/>);

const ChatBlock = (props) => {
    return (
        <div className={styles.chat_block}>
            <div className={styles.chat_person_name}>
                <h1>User</h1>
            </div>
            <div className={styles.chat} style={
                {
                    background: `url(${props.chat_block.chat_background}) no-repeat center center fixed`,
                    backgroundSize: 'cover'
                }}>
                {messageJSX}
            </div>
        </div>
    );
}

export default ChatBlock;