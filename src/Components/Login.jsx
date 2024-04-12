import React from 'react'
import "../css/all.css"
import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"
export const user12 = "https://661554c2b8b8e32ffc7a9dc2.mockapi.io/user";


function Login() {
    let [arrobj, setArrObj] = useState([{}]);
    let [obj, setObj] = useState({})
    let [name, setName] = useState(" ");
    let [gmail, setGmail] = useState(" ");
    let [password, setPassword] = useState("");
    let [check, letCheck] = useState();
    let [nmsg, setNmsg] = useState("");
    let [gmsg, setGmsg] = useState("")
    let [Pmsg, setPmsg] = useState("")
    let [cmsg, setCmsg] = useState()
    let [page, setPage] = useState()
    let navigate = useNavigate(false)

    console.log(check)
    console.log(obj)
    console.log(arrobj)
    let click = () => {

    }
    let val = () => {
        if (name.length < 5 || name == " ") {
            setNmsg("give a valid name")
            setPage(false)
        }
        else {
            setNmsg("")
            setPage(true)
        };

        if (!gmail.includes("@gmail.com") || gmail == "") {
            setGmsg("give a valid mail")
            setPage(false)

        }
        else {
            setGmsg("")
            setPage(true)
        }

        if (password === " " || password.length < 7) {
            setPmsg("give me a strong password")
            setPage(false)

        }
        else {
            setPmsg("")
            setPage(true)
        }

        if (check == false) {
            setCmsg("agree our terms and conditions")
            setPage(false)

        }
        else {
            setCmsg("")
            setPage(true)
        }

    }
    useEffect(() => {
    }, [name, password, check, gmail])
    let n = name.trim();
    let g = gmail.trim();
    let p = password.trim()

    async function fun(e) {
        e.preventDefault()
        val()
        setObj((a) => {
            return (
                { ...a, name: n, gmail: g, password: p, check }
            )
        })

        setArrObj((a) => {
            return (
                [...a, obj]
            )
        })

        try {
            let api = await axios.post(user12, { name, gmail, password, check })
        }
        catch (err) {
            console.log("error----->", err)
        }

        navigate("/Component/services")

    }
    return (
        <div>
            <div className='form-1' >
                <form className='form-2'>
                    <label htmlFor="name">USER NAME</label>
                    <input type="text" name='name' id='name' onChange={(e) => setName(e.target.value)} />
                    {nmsg && <p className='p-1'>{nmsg}</p>}
                    <label htmlFor="gmail">GMAIL</label>
                    <input type="text" name="gmail" id="gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} />
                    {gmsg && <p className='p-1'>{gmsg}</p>}
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name='password' id='password' onChange={(e) => setPassword(e.target.value)} />
                    {Pmsg && <p className='p-1'>{Pmsg}</p>}
                    <div>
                        <input type="checkbox" name="check" id="check" checked={check} onChange={() => letCheck((a) => !a)} />
                        <label htmlFor="check"> accept terms and condition</label>
                        {cmsg && <p className='p-1'>{cmsg}</p>}

                    </div>
                    <input type="submit" value={"submit"} onClick={(e) => fun(e)} />
                </form>

            </div>
        </div>
    )
}

export default Login