// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";
// import { error } from "console";
// import { createContext, ReactNode, useCallback, useState } from "react";
// import Cookies from 'js-cookie';


// export const authContext = createContext<any>(null)

// const AuthProvider = ({ children }: { children: ReactNode }) => {
    
//     const [loginData, setLoginData] = useState<{email:string, password:string}>({
//         email: "",
//         password:""
//     })
    
//     const [loginError, setLoginError] = useState<any>()

//     const [signupData, setSignupData] = useState<{email:string, password:string, username:string}>({
//         username: "",
//         email: "",
//         password:""
//     })

//     const [signUpError, setSignUpError] = useState<any>()


//     type loginFields = { user: { email: string; password: string; }; };
//     type signUpFields = { user: { email: string; password: string; username: string; }; };
  
//     const login = useCallback(async (post: loginFields) => {
//         try {
//             const response = await axios.post(`https://api.realworld.io/api/users/login`, post)
//             return response.data  
//         } catch (error) {
//             setLoginError(error)
//             const errorInterval = setInterval(() => {
//                 setLoginError(null)
//             }, 8000)

//             setTimeout(() => {
//                 clearInterval(errorInterval)
//             }, 9000)
//         }
//     }, [])

//     const { mutate, data:LoginData, isSuccess:LoginSuccess, isError:LogingIsError, error:LoginError } = useMutation({
//         mutationFn:login
//     })

//     if (LoginSuccess) {
//         const userString = JSON.stringify(LoginSuccess);
//         localStorage.setItem("user", userString)
//         localStorage.setItem("token", LoginData.token)
//         localStorage.setItem("token", LoginData.token)
//         window.location.href = "http://localhost:3000/"
//     }

//     const loginHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setLoginData({...loginData, [e.target?.name]: e.target?.value})
//     }

//     const loginHundleSubmit = (e: React.MouseEvent) => {
//         if (!loginData.email || !loginData.password) return
       
//         const body: loginFields = {
//             user: {
//                 email: loginData.email,
//                 password: loginData.password
//             }
//         }
//         mutate(body) 
//     }


//     const signUp = useCallback(async (post: signUpFields) => {
//         const response = await axios.post(`https://api.realworld.io/api/users`, post)
//         return response?.data?.user
//     }, [])

//     // const signUp = useCallback(async (post: signUpFields) => {
//     //     console.log("yaw")
//     //     try {
//     //         const response = await axios.post(`https://api.realworld.io/api/users`, post)
//     //         return response?.data?.user
//     //     } catch (error) {
//     //         console.log("sin", error)
//     //         setSignUpError(error)
//     //         const errorInterval = setInterval(() => {
//     //             setSignUpError(null)
//     //         }, 8000)

//     //         setTimeout(() => {
//     //             clearInterval(errorInterval)
//     //         }, 9000)
//     //     }
//     // }, [])

//     const { mutate:signUpMutate, data:SignupData, isSuccess:SignUpSuccess, isError:SignUpgIsError, error:SignUpError } = useMutation({
//         mutationFn:signUp
//     })

//     if (SignUpSuccess) {
//         const userString = JSON.stringify(SignupData);
//         localStorage.setItem("user", userString)
//         Cookies.set('token', SignupData.token, { expires: 7, secure: true });
//         localStorage.setItem("token", SignupData.token)
//         window.location.href = "http://localhost:3000/"
//     }

//     const signUpHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSignupData({ ...signupData, [e.target?.name]: e.target?.value })
//     }

//     const signUpHundleSubmit = (e: React.MouseEvent) => {
//         if (!signupData.email || !signupData.password || !signupData.username) return
       
//         const body: signUpFields = {
//             user: {
//                 email: signupData.email,
//                 password: signupData.password,
//                 username: signupData.username
//             }
//         }
//         signUpMutate(body) 
//     }

//   return (
//     <authContext.Provider value={{
//           loginHundleSubmit,
//           loginHandleChange,
//           loginError,
//           signUpHandleChange,
//           signUpHundleSubmit,
//           signUpError,
//           SignUpgIsError,
//           SignUpError
//       }}>
//       {children}
//     </authContext.Provider>
//   )
// }

// export default AuthProvider

// // {
// //     "user": {
// //         "email": "yawsamo23@gmail.com",
// //         "username": "yaw123",
// //         "bio": null,
// //         "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
// //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozMzA4OX0sImlhdCI6MTcxODI1Mjg1MSwiZXhwIjoxNzIzNDM2ODUxfQ.tYFwj6_Z3tBMlvozBhL4X0pakG8TUQs2qrJbOL-ShtQ"
// //     }
// // }

// // {
// //     "user": {
// //         "id": 33484,
// //         "email": "baba1@gmail.com",
// //         "username": "baba1",
// //         "bio": null,
// //         "image": "https://api.realworld.io/images/smiley-cyrus.jpeg",
// //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozMzQ4NH0sImlhdCI6MTcxODMwMDQzOSwiZXhwIjoxNzIzNDg0NDM5fQ.eQtDxF1O6GPqWSDFjfxDSiJZHOq-S5-PiBVp5Jjq0yw"
// //     }
// // }

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode, useCallback, useState } from "react";
import Cookies from 'js-cookie';

// Define a context for authentication
export const authContext = createContext<any>(null);

interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider component which provides context to its children
const AuthProvider = ({ children }: AuthProviderProps) => {
    
    // State for login data
    const [loginData, setLoginData] = useState<{ email: string, password: string }>({
        email: "",
        password: ""
    });
    
    // State for login errors
    const [loginError, setLoginError] = useState<any>();

    // State for signup data
    const [signupData, setSignupData] = useState<{ email: string, password: string, username: string }>({
        username: "",
        email: "",
        password: ""
    });

    // State for signup errors
    const [signUpError, setSignUpError] = useState<any>();

    // Define types for login and signup fields
    type LoginFields = { user: { email: string; password: string; }; };
    type SignUpFields = { user: { email: string; password: string; username: string; }; };
  
    // Function to handle login
    const login = useCallback(async (post: LoginFields) => {
            const response = await axios.post(`https://api.realworld.io/api/users/login`, post);
            console.log(response.data.user)
            return response.data.user;
    }, []);
   
    // useMutation hook for login
    const { mutate, data: LoginData, isSuccess: LoginSuccess, isError: LogingIsError, error: LoginError } = useMutation({
        mutationFn: login
    });

    // If login is successful, save user data and redirect
    if (LoginSuccess) {
        const userString = JSON.stringify(LoginData);
        localStorage.setItem("user", userString);
        localStorage.setItem("token", LoginData.token);
        Cookies.set('token', LoginData.token, { expires: 7, secure: true });
        window.location.href = "http://localhost:3000/";
    }

    if (LogingIsError) {
        console.log(LoginError)
    }

    // Handle changes in login form fields
    const loginHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    // Handle login form submission
    const loginHundleSubmit = (e: React.MouseEvent) => {
        if (!loginData.email || !loginData.password) return;
       
        const body: LoginFields = {
            user: {
                email: loginData.email,
                password: loginData.password
            }
        };
        mutate(body); 
    };

    // Function to handle signup
    const signUp = useCallback(async (post: SignUpFields) => {
            const response = await axios.post(`https://api.realworld.io/api/users`, post);
            return response?.data?.user;
    }, []);
    

    // useMutation hook for signup
    const { mutate: signUpMutate, data: SignupData, isSuccess: SignUpSuccess, isError: SignUpgIsError, error: SignUpError } = useMutation({
        mutationFn: signUp
    });

    // If signup is successful, save user data and redirect
    if (SignUpSuccess) {
        const userString = JSON.stringify(SignupData);
        localStorage.setItem("user", userString);
        Cookies.set('token', SignupData.token, { expires: 7, secure: true });
        localStorage.setItem("token", SignupData.token);
        window.location.href = "http://localhost:3000/";
    }

    // Handle changes in signup form fields
    const signUpHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    // Handle signup form submission
    const signUpHundleSubmit = (e: React.MouseEvent) => {
        if (!signupData.email || !signupData.password || !signupData.username) return;
       
        const body: SignUpFields = {
            user: {
                email: signupData.email,
                password: signupData.password,
                username: signupData.username
            }
        };
        signUpMutate(body); 
    };

    // Provide context values to children components
    return (
        <authContext.Provider value={{
            loginHundleSubmit,
            loginHandleChange,
            loginError,
            signUpHandleChange,
            signUpHundleSubmit,
            signUpError,
            SignUpgIsError,
            SignUpError,
            LogingIsError,
            LoginError 
        }}>
            {children}
        </authContext.Provider>
    );
    
}

export default AuthProvider;
