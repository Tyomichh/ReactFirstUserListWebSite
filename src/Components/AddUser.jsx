import React, {useState} from 'react';
import "../Styles/form.css";

const AddUser = (props) => {
    const [user, setUser] = useState([{
    firstName: '',
    lastName: '',
    bio: '',
    age: 1,
    isHappy: false
    }]);

    const handleAddUser = () => {
        props.onAddUser(user);
        setUser({
            firstName: '',
            lastName: '',
            bio: '',
            age: 1,
            isHappy: false
        });
    };

    return (
        <form className="addUserForm">
          <input placeholder='Name' value={user.firstName} onChange={e => setUser({...user, firstName: e.target.value})}/>
          <input placeholder='Surname' value={user.lastName} onChange={e => setUser({...user, lastName: e.target.value})}/> 
          <textarea value={user.bio} onChange={e => setUser({...user, bio: e.target.value})}></textarea>
          <input placeholder='Age' value={user.age} onChange={e => setUser({...user, age: e.target.value})}/> 
          <label htmlFor="isHappy">Is Happy?)</label>
          <input type="checkbox" id="isHappy" value={user.isHappy} onChange={e => setUser({...user, isHappy: e.target.checked})}/>
            <button type="button" onClick={handleAddUser}>Add</button>
        </form>
    );
};

export default AddUser;


/*import React, { useState } from 'react';
import "../Styles/form.css";

const AddUser = (props) => {
    const initialUserState = {
        firstName: '',
        lastName: '',
        bio: '',
        age: 1,
        isHappy: false
    };

    const [user, setUser] = useState(initialUserState);

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setUser({ ...user, [name]: newValue });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onAddUser(user);
        setUser(initialUserState);
    };

    return (
        <form className="addUserForm" onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                placeholder="Name"
                value={user.firstName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Surname"
                value={user.lastName}
                onChange={handleInputChange}
            />
            <textarea
                name="bio"
                value={user.bio}
                onChange={handleInputChange}
            ></textarea>
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={user.age}
                onChange={handleInputChange}
            />
            <label htmlFor="isHappy">Is Happy?</label>
            <input
                type="checkbox"
                id="isHappy"
                name="isHappy"
                checked={user.isHappy}
                onChange={handleInputChange}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddUser;
*/ 