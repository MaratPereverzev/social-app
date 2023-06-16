import styles from './people-block.module.css';

const PeopleBlock = (props) => {
    return (
        <div className={styles.people_block}>
            <div className={styles.search_bar}>
                <input type="text" placeholder="Search" />
            </div>
            <div className={styles.people}>
                {props.people_block.peopleJSX}
            </div>
        </div>
    );
}

export default PeopleBlock;