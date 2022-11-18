import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers () {
            try {
                const {data} = await axios.get("https://fakedata69.herokuapp.com/data");
                console.log(data);
                setUsers(data);
            }
            catch(err) {
                console.log(err);
                alert("Error Happened In Fetching Data");
            }   
        }
        getUsers();
    }, []);
    return(
        <>
            <h1>This are fake-data:</h1>

            <table className="table text-center">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user.id}>
                                    <td scope="row">{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}