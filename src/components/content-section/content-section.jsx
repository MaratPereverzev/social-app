import ChatPage from './chat-page/chat-page';
import styles from './content-section.module.css';
import ProfilePage from './profile-page/profile-page';
import {Route, Routes} from 'react-router-dom';

const ContentSection = () => {
    return (
        <div className={styles.ContentSection}>
            <Routes>
                <Route path='/profile/' element={<ProfilePage name='Oleg'/>} />
                <Route path='/chat/*' element={<ChatPage />} />
            </Routes>
        </div>
    );
}

export default ContentSection;