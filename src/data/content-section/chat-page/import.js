import buddy_avatar from "./people-block/person-block/watch-the-sunset-thumb.jpg";
import chat_background from "./chat-block/i.webp";
import PersonBlock from "../../../components/content-section/chat-page/people-block/person-block/person-block";

const peopleArray = [
    {id: "1", name: "1name", profile_avatar: buddy_avatar},
    {id: "2", name: "2name", profile_avatar: buddy_avatar},
    {id: "3", name: "3name", profile_avatar: buddy_avatar},
    {id: "4", name: "4name", profile_avatar: buddy_avatar},
    {id: "5", name: "5name", profile_avatar: buddy_avatar}
];

const peopleJSX = peopleArray.map(person => <PersonBlock person_block={person}/>);

const chat_page = {
    people_block: {
        peopleJSX
    },
    chat_block: {
        chat_background
    }
};

export default chat_page;