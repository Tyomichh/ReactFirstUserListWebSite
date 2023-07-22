import React, {useState} from 'react';
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

    let userAdd = user;

    const handleAddUser = () => {
        if (props.userU) {
            userAdd.id = props.userU.id
            props.onAddUser(userAdd);
            setUser(userAdd);
        } else {
            props.onAddUser(user);
        setUser(initialUserState);
        }
        
    };

    return (
        <form className="addUserForm">
            <input placeholder='Name' value={user.firstName} onChange={e => setUser({...user, firstName: e.target.value})}/>
            <input placeholder='Surname' value={user.lastName} onChange={e => setUser({...user, lastName: e.target.value})}/> 
            <textarea value={user.bio} onChange={e => setUser({...user, bio: e.target.value})}></textarea>
            <input placeholder='Age' value={user.age} onChange={e => setUser({...user, age: e.target.value})}/> 
            <label htmlFor="isHappy">Is Happy?)</label>
            <input type="checkbox" id="isHappy" checked={user.isHappy} onChange={e => setUser({...user, isHappy: e.target.checked})}/>
            <button type="button" onClick={handleAddUser}>Add</button>
        </form>
    );
};

export default AddUser;
