import React from 'react';
import User from './User';

const Users = (props) => {   
    
    if(props.users.length > 0) {
        return (
            <div>
                {props.users.map(el => (
                    <User key={el.id} user={el} onDelete={props.onDelete} onEdit={props.onEdit} />
                ))}
            </div>
        );
    }

    else {
        return (
            <div className="user">
                <h3>EROR 501, Users not faund !</h3>
            </div>
        );
    }
  
};

export default Users;