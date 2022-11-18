import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home () {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers () {
            try {
                const data = await axios.get("https://fakedata69.herokuapp.com/data");

                setUsers(data);
            }
            catch(err) {
                console.log(err);
                alert("Error Happened In Fetching Data");
            }   
        }
        getUsers();
    }, []);

    console.log(users.data);
    return(
        <>
            <h1>This are fake-data:</h1>

            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                </tr>
                <tr>
                    {
                        users.data.map((item) => {
                            return <td>{item.id}</td>
                        })
                    }
                </tr>
            </table>
        </>
    );
}