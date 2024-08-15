// import Age from "./Age";
import {Age, Height} from "./UserProperties"
import UserDetails from "./UserProperties"
import Product from "./Product"
import { useState } from "react";

function User(){
    const name = "Bikash Shrestha";
    // const age = 70;
    const height = "5ft 8 inch";

    const [age, setAge] = useState(10); //useState dyanmic value manage garnw use garney hook, it contains two paramter one set the value and another method that changes the value
    const [user, setUser] = useState({
        name: "Bikram",
        age: 10,
        height: 600
    })

    const handleClick = () => {
        setAge(age + 1);
        setUser((user) => ({
            name: user.name + " datebayo",
            age: user.age + 2,
            height: user.height + 30
        }));
    }   

    return(
        <div className="">
            <h1>Hello, {user.name}, I am {user.age} year old. Height = {user.height}</h1>
            <Product></Product>
            <Age />
            <br></br>
            <Height />
            <h1>User Properties</h1>
            <UserDetails age={age} height={height}/>

            <div>
                <button onClick={handleClick}>Increase Age</button>
            </div>
        </div>
    )
}

export default User;