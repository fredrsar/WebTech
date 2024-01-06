import React from 'react';
import { FiMessageSquare } from "react-icons/fi"; 
import { MdEdit } from "react-icons/md"; 
import { LuTrash } from "react-icons/lu"; 

import CommentForm from './CommentForm'

const CommentCard = ({
        comment, 
        loggedInUserId, 
        affectedComment, 
        setAffectedComment,
        addComment,
        parentId = null, 
        updateComment,
        deleteComment, 
        replies
    }) => {
    const isUserLoggedIn = Boolean(loggedInUserId); 
    const commentBelongsToUser = Boolean(loggedInUserId === comment.user._id);
    const isReplying = 
        affectedComment && 
        affectedComment.type == 'replying' && 
        affectedComment._id === comment._id;
    const isEditing = 
        affectedComment && 
        affectedComment.type == 'editing' && 
        affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id; 
    const replyOnUserId = comment.user._id; 

    return(
        <div className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg 
                        dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>{/*Left side: only pic*/}
            <img 
                src={comment.user.image} // The img should be a part of user. Stored in backend
                alt="profile picture" 
                className='w-9 h-9 object-cover rounded-full'
            />
            <div className='flex-1 flex flex-col'> {/*Right side: content of comment*/}
                <h5 className='font-bold text-dark-hard text-xs'> {/*Username*/}
                    {comment.user.name}
                </h5>
                <span className='text-xs text-dark-light'> {/*Timestamp*/}
                    {new Date(comment.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short", 
                        year: "numeric",
                        hour: "2-digit" 
                    })}
                </span>
                {!isEditing && (
                    <p className='font-opensans mt-[10px] text-dark-light'>
                    {comment.content}
                    </p>
                )}
                {isEditing && (  // For editing-button
                    <CommentForm 
                        btnLabel="Update" 
                        formSubmitHandler={(value) => updateComment(value, comment._id)}
                        formCancelHandler={() => affectedComment(null)}
                        initialText = {comment.content} //when editing
                    />
                )}
                <div className='flex items-center gap-x-3 text-dark-light font-family-roboto text-sm mt-3 mb-3'> 
                    {isUserLoggedIn && ( // Must be logged in to reply
                        <button 
                            className='felx items-center space-x-2' 
                            onClick={() => 
                                setAffectedComment({type: 'replying' , _id: comment._id})}> {/*Reply button*/}
                            <FiMessageSquare className="w-4 h-auto"/> 
                            <span>Reply</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <>
                            <button 
                                className='flex items-center space-x-2'
                                onClick={() => 
                                    setAffectedComment({type: 'editing' , _id: comment._id})}> {/*Edit button*/}
                                <MdEdit className="w-4 h-auto"/> 
                                <span>Edit</span>
                            </button>
                            <button 
                                className='flex items-center space-x-2' 
                                onClick={deleteComment(comment._id)}> {/*Delete button*/}
                            <LuTrash className="w-4 h-auto"/>
                            <span>Delete</span>
                            </button>
                        </>
                    )}
                </div>
                {isReplying && (
                    <CommentForm 
                        btnLabel='Reply' 
                        formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)}
                        formCancelHandler={() => affectedComment(null)} //cancel mean reset affected comment to null    
                    />
                )}
                {replies.length > 0 && (
                    <div> 
                        {replies.map((reply) => {
                            <CommentCard 
                                key={reply._id}    
                                addComment={addComment}
                                affectedComment={affectedComment}
                                setAffectedComment={setAffectedComment}
                                comment={reply}
                                deleteComment={deleteComment}
                                updateComment={updateComment}
                                loggedInUserId={loggedInUserId}
                                replies={[]}
                                parentId={comment._id}
                            /> 
                        })}
                    </div> 
                )}
            </div> 
        </div>
    );
};

export default CommentCard; 