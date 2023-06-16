import styles from './menu-bar.module.css';

import DefaultButton from './button/default-button/default-button.jsx';
import NewPostButton from './button/new-post-button/new-post-button.jsx';

import { NavLink } from 'react-router-dom';


const MenuBar = (props) => {
    return (
            <div className={ styles.Menu_bar }>
                <NavLink to="/home/"><DefaultButton src={props.menu_bar.button_icons.home} alt='home button'/></NavLink>
                <NavLink to="/profile/"><DefaultButton src={props.menu_bar.button_icons.profile} alt='profile button'/></NavLink>
                <NavLink to="/chat/"><DefaultButton src={props.menu_bar.button_icons.chat} alt='chat button'/></NavLink>
                <NavLink to="/create/"><NewPostButton /></NavLink>
                <NavLink to="/search/"><DefaultButton src={props.menu_bar.button_icons.search} alt='search button'/></NavLink>
                <NavLink to="/settings/"><DefaultButton src={props.menu_bar.button_icons.settings} alt='settings button'/></NavLink>
            </div>
    );
}

export default MenuBar;