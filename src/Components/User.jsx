import React from 'react';
import "../Styles/user.css";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

const User = (props) => {
  
        return (
            <div className="user">
                <IoCloseCircleSharp className="userIcons" />
                <IoHammerSharp className="userIcons"/>
                <h2>{`${props.user.firstName} ${props.user.lastName}`}</h2>
                <p>Age: {props.user.age}</p>
                <p>Bio: {props.user.bio}</p>
                <p>{props.user.isHappy ? 'Happy' : 'Not Happy'}</p>
            </div>
        ); 
};

export default User;