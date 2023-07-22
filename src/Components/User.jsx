import React, {useState} from 'react';
import "../Styles/user.css";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';
import AddUser from './AddUser';

const User = (props) => {
  
    const [editForm, setForm] = useState(false);

        return (
            <div className="user">
                <IoCloseCircleSharp className="userIcons" onClick={() => props.onDelete(props.user.id)} />
                <IoHammerSharp className="userIcons" onClick={() => setForm(!editForm)}/>
                <h2>{`${props.user.firstName} ${props.user.lastName}`}</h2>
                <p>Age: {props.user.age}</p>
                <p>Bio: {props.user.bio}</p>
                <p>{props.user.isHappy ? 'Happy' : 'Not Happy'}</p>

                {editForm && <AddUser userU={props.user} onAddUser={props.onEdit} />}
                
            </div>
        ); 
};

export default User;