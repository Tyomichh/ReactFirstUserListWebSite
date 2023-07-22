import React, { useState } from 'react';
import Header from './Components/Header'
import Users from './Components/Users';
import AddUser from './Components/AddUser';


const App = () => {

    const [users, setUsers] = useState([{
        id: 1,
        firstName: 'Jhon',
        lastName: 'Doe',
        bio: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        age: 60,
        isHappy: true
    },
    {
        id: 2,
        firstName: 'Leruanna',
        lastName: 'Mackmilan',
        bio: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem em ipsum lorem ipsum lorem ipsum lorem',
        age: 32,
        isHappy: false
    }]);

    const deleteUser = (id) => {
        setUsers(users.filter((el) => el.id !== id))
    }

    const createUser = (user) => {
        const id = users.length + 1;
        const newPost = {
            id,
            ...user
        }
        setUsers([...users, newPost]);
    }
    console.log(users)

    const editUser = (user) => {
        setUsers(prevUsers => prevUsers.map(prevUser => prevUser.id === user.id ? user : prevUser));
    };


    return (
        <>
            <Header title={"Users list"} />

            <main>
                <Users users={users} onDelete={deleteUser} onEdit={editUser} />
            </main>

            <aside>
                <AddUser onAddUser={createUser} />
            </aside>
        </>
    )

};

export default App;