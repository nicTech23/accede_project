import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { error } from "console";
import { createContext, ReactNode, useCallback, useState } from "react";


export const authContext = createContext<any>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [loginData, setLoginData] = useState<{email:string, password:string}>({
        email: "",
        password:""
    })
    
    const [loginError, setLoginError] = useState<any>()

    const [signupData, setSignupData] = useState<{email:string, password:string, username:string}>({
        username: "",
        email: "",
        password:""
    })

    const [signUpError, setSignUpError] = useState<any>()


    type loginFields = { user: { email: string; password: string; }; };
    type signUpFields = { user: { email: string; password: string; username: string; }; };
  
    const login = useCallback(async (post: loginFields) => {
        
        try {
            const response = await axios.post(`https://api.realworld.io/api/users/login`, post)
            return response.data  
        } catch (error) {
            setLoginError(error)
            const errorInterval = setInterval(() => {
                setLoginError(null)
            }, 8000)

            setTimeout(() => {
                clearInterval(errorInterval)
            }, 9000)
        }
    }, [])

    const { mutate, data:LoginData, isSuccess:LoginSuccess, isError:LogingIsError, error:LoginError } = useMutation({
        mutationFn:login
    })

    const loginHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target?.name]: e.target?.value})
    }

    const loginHundleSubmit = (e: React.MouseEvent) => {
        if (!loginData.email || !loginData.password) return
        const body:loginFields = {
            user: {
                email: loginData.email,
                password: loginData.password
            }
        }
        mutate(body) 
    }


    const signUp = useCallback(async (post: loginFields) => {
        
        try {
            const response = await axios.post(`https://api.realworld.io/api/users`, post)
            return response.data  
        } catch (error) {
            console.log("sin", error)
            signUpError(error)
            const errorInterval = setInterval(() => {
                signUpError(null)
            }, 8000)

            setTimeout(() => {
                clearInterval(errorInterval)
            }, 9000)
        }
    }, [])

    const { mutate:signUpMutate, data:SignupData, isSuccess:SignUpSuccess, isError:SignUpgIsError, error:SignUpError } = useMutation({
        mutationFn:signUp
    })

    const signUpHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData({ ...signupData, [e.target?.name]: e.target?.value })
    }

    const signUpHundleSubmit = (e: React.MouseEvent) => {
        console.log("dddkd")
        if (!signupData.email || !signupData.password || signupData.username) return
        const body:signUpFields = {
            user: {
                email: signupData.email,
                password: signupData.password,
                username: signupData.username
            }
        }
        signUpMutate(body) 
    }

  return (
    <authContext.Provider value={{
          loginHundleSubmit,
          loginHandleChange,
          loginError,
          signUpHandleChange,
          signUpHundleSubmit,
          signUpError
      }}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider

// {
//     "user": {
//         "email": "yawsamo23@gmail.com",
//         "username": "yaw123",
//         "bio": null,
//         "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozMzA4OX0sImlhdCI6MTcxODI1Mjg1MSwiZXhwIjoxNzIzNDM2ODUxfQ.tYFwj6_Z3tBMlvozBhL4X0pakG8TUQs2qrJbOL-ShtQ"
//     }
// }