import ChatBlock from './chat-block/chat-block';
import styles from './chat-page.module.css';
import PeopleBlock from'./people-block/people-block';

const ChatPage = () => {
    return (
        <div className={styles.chat_page}>
            <PeopleBlock />
            <hr />
            <ChatBlock />
        </div>
    );
}

export default ChatPage;