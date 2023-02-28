import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UsersListTable() {
    const [user, setUser] = useState([]);

    const userData = async () => {
        try {

            const data = axios.get('https://reqres.in/api/users?page=2')
            .then((res) => setUser(res.data.data))
            console.log(data.data)

        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        userData();
    }, [])

    return (
        <div className='list'>
            <h1>User Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>avatar</th>
                    </tr>
                </thead>
            </table>
            {
                user && user.map((elem, ind) => {
                    return <div className="info" key={ind}>
                        <tr>
                            <td>{elem.id}</td>
                            <td>{elem.first_name}</td>
                            <td>{elem.last_name}</td>
                            <td><img className='avatar' src={elem.avatar} /></td>
                        </tr>
                    </div>
                })
            }


        </div>
    )
}

export default UsersListTable;
