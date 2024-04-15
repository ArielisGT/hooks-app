import { useEffect, useState } from "react"
import { Message } from "../components/Message";

export const SimpleForm = () => {
    
    const [formState, setformState] = useState({
        username: 'ArielisGT',
        email: 'arielisgt@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value} = target;
        //console.log ({ name, value});
        setformState({
            ...formState,
            [ name ]: value,
        })
    }

    useEffect(() => {
        console.log("useEffect changed!");
      
        return () => {
        
        }
    }, [])


    useEffect(() => {
      console.log("formState changed!");
    
      return () => {
    
      }
    }, [formState])


    return (
        <>
        <h1>Simple Form</h1>
        <hr />


        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        {
            (username === 'ArielisGT') && <Message />

        }

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="ariel@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
    </>

  )
}
