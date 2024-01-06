"use client"
import React, { useEffect, useState } from 'react'; 
import { getCommentsData } from './CommentsData';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import { FaArrowUp } from "react-icons/fa";



const CommentsContainer = ({className, loggedInUserId}) => {
    const [comments, setComments] = useState([]); 
    const mainComments = comments.filter((comment) => comment.parent === null)
    const [affectedComment, setAffectedComment] = useState(null); // Comment we´re replying on 

    console.log(comments); 

    // Getting the comments on render 
    useEffect(() => {
        (async() => {
            const commentData = await getCommentsData(); 
            setComments(commentData);  
        })() 
    }, []); 

    const addCommentHandler = (value, parent = null, replyONuser = null) => {
        const newComment = {
            id: Math.random().toString(), // comment-id 
            user: { // infor about the user who posted the comment
                _id: "a", 
                name: "Nicolas D´Terney"
            }, 
            content: "Do you even lift, bro?",
            post: "1", // id of the post we´re commenting on 
            replyONuser: null, 
            parent: null, 
            createdAt: new Date().toISOString(), // Replace with timestamp 
        };
        setComments((currentState) => {
            return [newComment, ...currentState]; // copy all the properties from newComment into current state with spread-operator
        }); 
        setAffectedComment(null); 
    }

    const updateCommentHandler = (value, commentId) => {
        const updatedComments = comments.map((comment) => {
            if (comment._id === commentId){
                return {...comment, content: value}; // return comment 
            }
            return comment; 
        }); 
        setComments(updatedComments); 
        setAffectedComment(null);  
    }

    const deleteCommentHandler = (commentId) => {
        const updatedComments = comments.filter((comment) => {
            return comment._id !== commentId;
        })
        setComments(updatedComments);
    }

    const getRepliesHandler = (commentId) => { //Find comments that are replies of this commentId  
        return comments.filter((comment => comment.parent === commentId))
        .sort((a,b) => { // sort in ascending order
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        }); 
    }

    return (
        <div className={'${className}'}> 
            <CommentForm 
                btnLabel={<FaArrowUp />}
                formSubmitHandler={(value) => addCommentHandler(value)}
            />
            <div className='space-y-4 mt-8 '> 
                {mainComments.map((comment) => (
                    <CommentCard 
                    key = {comment._id}
                        comment={comment} 
                        loggedInUserId = {loggedInUserId}
                        affectedComment = {affectedComment}
                        setAffectedComment = {setAffectedComment}
                        addComment = {addCommentHandler}
                        updateComment = {updateCommentHandler}
                        deleteComment = {deleteCommentHandler}
                        replies = {getRepliesHandler(comment._id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CommentsContainer; 