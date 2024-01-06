import React from 'react';
import CommentsContainer from './comments/CommentsContainer';

const Post = (props) => {
  return (
    <div className="max-w-sm min- mx-auto bg-white overflow-hidden shadow-2xl mb-12 rounded-lg space-y-4">
    <div className="p-3"> 
      <h1 className="text-black font-bold text-xl font-serif">{props.title}</h1>

      {/* Conditionally render the image */}
      {props.imageUrl && (
        <img className="rounded-lg object-cover h-60 w-96 my-3" src={props.imageUrl} alt={props.title || "Post Image"} />
      )}

      <span className="text-blue-600 text-xs font-medium uppercase">{props.tag}</span>
      <p className="text-gray-800 p-3">{props.content}</p>
    </div>
    <div className="flex items-center mt-4 p-3">  
        <img className="w-10 h-10 object-cover rounded-full" src={"FredrikPP.png"} alt="Author" />
        <h4 className="mx-2 text-gray-700 font-semibold hover:text-gray-500 active:text-gray-700">By {props.author}</h4>
        <span className="mx-1 text-gray-600 text-xs">{props.date}</span>
    </div>
    <CommentsContainer className="mt-10" loggedInUserId="a"/> {/* Will get this from API later */}
  </div>
);
};

export default Post;