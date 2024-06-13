import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode, useCallback, useState } from "react";


export const authContext = createContext<any>(null)

const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [loginData, setLoginData] = useState<{email:string, password:string}>({
        email: "",
        password:""
    })


    type loginFields = { user: { email: string; password: string; }; };
  
    const login = useCallback(async (post:loginFields) => {
        try {
            const response = await axios.post(`https://api.realworld.io/api/users/login`, post)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }, [])

    const { mutate, data, isSuccess} = useMutation({
        mutationFn:login
    })

    const loginHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }
    const loginHundleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target?.name]: e.target?.value})
        console.log()
        // if (!email || !password) return
        
        const body:loginFields = {
            user: {
                email: loginData.email,
                password: loginData.password
            }
        }

        mutate(body)

        if (e.target instanceof HTMLFormElement) {
            e.target.reset();
        }

    }


    if (isSuccess) {
        console.log("my", data)
    }
  return (
    <authContext.Provider value={{loginHundleSubmit}}>
      {children}
    </authContext.Provider>
  )
}

export default AuthProvider
