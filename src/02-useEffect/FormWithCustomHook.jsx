import { useEffect } from "react"
import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const FormWithCustomHook = () => {
    
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;


    // useEffect(() => {
    //     console.log("useEffect changed!");
      
    //     return () => {
        
    //     }
    // }, [])


    // useEffect(() => {
    //   console.log("formState changed!");
    
    //   return () => {
    
    //   }
    // }, [formState])


    return (
        <>
        <h1>Form with custom Hook</h1>
        <hr />


        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        {/* {
            (username === 'ArielisGT') && <Message />

        } */}

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="ariel@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        <input 
            type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />
        <button onClick={onResetForm}>Reset</button>
    </>

  )
}
