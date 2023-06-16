import profile_intro_background from "./profile-intro-background/i (1).webp";
import post_image from "./profile-posts/post/lofi-girl-studying-wallpaper-3840x2160_54.jpg";
import profile_avatar from "./profile-info/lofi-chill-bedroom-wallpaper-2880x1800_8.jpg";
import Post from "../../../components/content-section/profile-page/profile-posts/post/post";

const posts = [
    post_image, post_image, post_image, post_image, post_image
];

const PostsJSX = posts.map(post_image => <Post post_image={post_image}/>);

const profile_page = {
    profile_info: {
        profile_avatar: profile_avatar,
        name: 'Oleg',
        age: 999,
        status: 'entrepreneur',
        bio: 'qwerty'
    },
    profile_intro_background,
    post_images: PostsJSX
};

export default profile_page;