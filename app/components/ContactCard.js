"use client"
import React from 'react';



const ContactCard = (props) => {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg">
            <img className="w-full object-scale-down h-105 object-cover" src={props.imgUrl} alt="profile_picture" /> 
            <div className="p-6 space-y-3"> 
                <span className="text-black text-lg font-medium">{props.name}</span>
                <p className="text-black text-sm">{props.text}</p>
                <span className="text-gray-600 text-xs font-medium uppercase">{props.title}</span>
            </div>
      </div>
    );
  };

export default ContactCard;