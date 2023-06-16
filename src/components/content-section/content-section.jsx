import ChatPage from './chat-page/chat-page';
import styles from './content-section.module.css';
import ProfilePage from './profile-page/profile-page';
import {Route, Routes } from 'react-router-dom';

const ContentSection = (props) => {
    return (  
        <div className={styles.ContentSection}>
            <Routes>
                <Route path='/profile/' element={<ProfilePage profile_page={props.content_section.profile_page}/>} />
                <Route path='/chat/*' element={<ChatPage chat_page={props.content_section.chat_page}/>} />
            </Routes>
        </div>
    );
}

export default ContentSection;