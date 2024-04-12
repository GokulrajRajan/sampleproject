import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { user12 } from './Login';
function Services() {
    let [state, setState] = useState([])

    async function delet(id) {
        try {
            await axios.delete(`${user12}/${id}`);
            fun()
        }
        catch (err) {
            console.log("error----->", err)
        }
    }
    async function fun() {
        try {
            let api = await axios.get(user12)
            setState(api.data)
            console.log(api)

        }
        catch (err) {
            console.log("error------>", err)
        }
    }
    console.log(state)
    console.log(state)

    useEffect(() => {
        fun()
    }, [])
    return (
        <div >
            <table style={{ width: "100%", color: "black", fontFamily: "monospace", fontSize: "12px", border: "1px solid black", borderCollapse: "collapse" }} border={2} cellPadding={"10px"} cellSpacing={"10px"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>gmail</th>
                        <th>password</th>
                        <th>checked</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((state) => {
                            return (
                                <tr key={state.id} style={{ color: "black", textIndent: "20px" }}>
                                    <td>{state?.id}</td>
                                    <td>{state?.name}</td>
                                    <td>{state?.gmail}</td>
                                    <td>{state?.password}</td>
                                    <td>{state.check ? "true" : "false"}</td>
                                    <td><button onClick={() => delet(state.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Services