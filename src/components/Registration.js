import React from 'react'

export default function Registration() {
    return (
        <div>
            <form action="http://127.0.0.1:8000/api/register" method="POST">
                <label for="email"><b>Name: </b></label>
                <input type="text" placeholder="Enter Name" name="name" required/>

                <label for="psw-repeat"><b>Email: </b></label>
                <input type="text" placeholder="Enter email" name="email" required/>

                <label for="psw"><b>Password: </b></label>
                <input type="password" placeholder="Enter Password" name="password" required/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
