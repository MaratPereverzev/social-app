import styles from './menu-bar.module.css';

import DefaultButton from './button/default-button/default-button.jsx';
import NewPostButton from './button/new-post-button/new-post-button.jsx';

import home from './button/default-button/icons/home.png';
import profile from './button/default-button/icons/profile.png';
import chat from './button/default-button/icons/chat.png';
import search from './button/default-button/icons/search.png';
import settings from './button/default-button/icons/settings.png';

import { NavLink, Router} from 'react-router-dom';


const MenuBar = () => {
    return (
            <div className={ styles.Menu_bar }>
                <NavLink to="/home/"><DefaultButton src={home} alt='home button'/></NavLink>
                <NavLink to="/profile/"><DefaultButton src={profile} alt='profile button'/></NavLink>
                <NavLink to="/chat/"><DefaultButton src={chat} alt='chat button'/></NavLink>
                <NavLink to="/create/"><NewPostButton /></NavLink>
                <NavLink to="/search/"><DefaultButton src={search} alt='search button'/></NavLink>
                <NavLink to="/settings/"><DefaultButton src={settings} alt='settings button'/></NavLink>
            </div>
    );
}

export default MenuBar;