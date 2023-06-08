import styles from './people-block.module.css';
import PersonBlock from './person-block/person-block';
import photo from '../../profile-page/profile-intro-background/lofi-chill-bedroom-wallpaper-2880x1800_8.jpg';

const PeopleBlock = (props) => {
    let peopleArray = [
        { name: 'elena', id: '1' },
        { name: 'mikita', id: '2' },
        { name: 'evgenii', id: '3' },
        { name: 'robert', id: '4' },
        { name: 'user', id: '5'}

    ];
    let peopleJSX = peopleArray.map(person => <PersonBlock src={photo} name={person.name} id={person.id}/>)
    return (
        <div className={styles.people_block}>
            <div className={styles.search_bar}>
                <input type="text" placeholder="Search" />
            </div>
            <div className={styles.people}>
                {peopleJSX}
            </div>
        </div>
    );
}

export default PeopleBlock;