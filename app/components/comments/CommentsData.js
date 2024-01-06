export const getCommentsData = async () => {

    return [
        {
            id: "1", // comment-id 
            user: { // infor about the user who posted the comment
                _id: "a", 
                name: "Fredrik Sarai"
            }, 
            content: "This is a comment",
            post: "1", // id of the post we´re commenting on 
            replyONuser: null, 
            parent: null, 
            createdAt: "15 December 2023" // Replace with timestamp 
        }, 
        {
            id: "2", // comment-id 
            user: { // info about the user who posted the comment
                _id: "b", 
                name: "Nicolas D´Terney"
            }, 
            content: "Yeah, bro! That´s so cool!",
            post: "2", // id of the post we´re commenting on 
            replyONuser: null, 
            parent: null, 
            createdAt: "15 December 2023" // Replace with timestamp 
        }, 
        {
            id: "3", // comment-id 
            user: { // info about the user who posted the comment
                _id: "c", 
                name: "Aymeric Moulet"
            }, 
            content: "Couldn´t agree more, mec! Yoyo!",
            post: "1", // id of the post we´re commenting on 
            replyONuser: "1", 
            parent: "1", 
            createdAt: "15 December 2023" // Replace with timestamp 
        }
    ]
}