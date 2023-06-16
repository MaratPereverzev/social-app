import ChatBlock from './chat-block/chat-block';
import styles from './chat-page.module.css';
import PeopleBlock from'./people-block/people-block';

const ChatPage = (props) => {
    return (
        <div className={styles.chat_page}>
            <PeopleBlock people_block={props.chat_page.people_block} />
            <hr />
            <ChatBlock chat_block={props.chat_page.chat_block} />
        </div>
    );
}

export default ChatPage;