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

    const createUser = (user) => {
        console.log(user);
        console.log(users);
        const id = users.length + 1;
        setUsers([...users, { ...user, id }]);
    }

    return (
        <>
            <Header title={"Users list"} />

            <main>
                <Users users={users} />
            </main>

            <aside>
                <AddUser onAddUser={createUser} />
            </aside>
        </>
    )

};

export default App;