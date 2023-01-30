import React from 'react'

const users = [
    {
        idUser: 123456,
        name: "Alberto",
        cohorte: 22,
    },
    {
        idUser: 123,
        name: "Juan",
        cohorte: 22,
    }
]

export const Home = () => {

    const listItems = users.map(user => <li key={user.idUser}>{user.name} de la cohorte {user.cohorte}</li>);

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}
