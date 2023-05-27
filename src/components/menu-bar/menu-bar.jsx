import styles from './menu-bar.module.css';

import DefaultButton from './button/default-button/default-button.jsx';
import NewPostButton from './button/new-post-button/new-post-button.jsx';

import home from './button/default-button/icons/home.png';
import profile from './button/default-button/icons/profile.png';
import chat from './button/default-button/icons/chat.png';
import search from './button/default-button/icons/search.png';
import settings from './button/default-button/icons/settings.png';


const MenuBar = () => {
    return (
        <div className={ styles.Menu_bar }>
            <DefaultButton src={home} alt='home button'/>
            <DefaultButton src={profile} alt='profile button'/>
            <DefaultButton src={chat} alt='chat button'/>
            <NewPostButton />
            <DefaultButton src={search} alt='search button'/>
            <DefaultButton src={settings} alt='settings button'/>
        </div>
    );
}

export default MenuBar;