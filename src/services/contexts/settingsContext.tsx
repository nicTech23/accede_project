// import axios from "axios"
// import { createContext, ReactNode, useState } from "react"
// import Cookies from 'js-cookie';
// import { useMutation } from "@tanstack/react-query";

// export const settingsContext = createContext<any>(null)


// const SettingsProvider = ({children}:{children: ReactNode}) => {

//     const [fields, setFields] = useState({
//         url: "",
//         name: "",
//         bio: "",
//         email: "",
//         new_password: ""
//     })
//     interface User {user: { email: string; password: string; username: string; bio: string; image: string; }
// }

//     const settingFn = async (fields:User ) => {
       
//         const cookieValue = Cookies.get('token');
//         const response = await axios.put("https://api.realworld.io/api/user", fields, {
//             withCredentials: true,
//             headers: {
//                 'Authorization': cookieValue
//             }
//         })
//         console.log(response.data)
//         return response.data
//     }

//     const { mutate:settingData, data, isError, error} = useMutation({
//         mutationFn: settingFn
//     })

//     const settingsSubmit = async () => {
//          const fields: User = {
//             user: {
//                 email: "string",
//                 password: "string",
//                 username: "string",
//                 bio: "string",
//                 image: "string"
//             }
//          }
        
//         settingData(fields)
//     }

//     if (isError) {
//         console.log("error", error)
//     }

//     const fieldsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFields({...fields, [e.target?.name]: e.target?.value})
//     }

//   return (
//     <settingsContext.Provider value={{settingsSubmit, fieldsHandleChange}}>
//       {children}
//     </settingsContext.Provider>
//   )
// }

// export default SettingsProvider



import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import Cookies from 'js-cookie';
import { useMutation } from "@tanstack/react-query";

// Define a context for settings
export const settingsContext = createContext<any>(null);

interface SettingsProviderProps {
  children: ReactNode;
}

interface User {
  user: {
    email: string;
    password: string;
    username: string;
    bio: string;
    image: string;
  };
}

// SettingsProvider component which provides context to its children
const SettingsProvider = ({ children }: SettingsProviderProps) => {

  // State for settings fields
  const [fields, setFields] = useState({
    url: "",
    name: "",
    bio: "",
    email: "",
    new_password: ""
  });

  // Function to handle settings update
  const settingFn = async (fields: User) => {
    const cookieValue = Cookies.get('token');
    const response = await axios.put("https://api.realworld.io/api/user", fields, {
      withCredentials: true,
      headers: {
        'Authorization': cookieValue
      }
    });
    console.log(response.data);
    return response.data;
  }

  // useMutation hook for updating settings
  const { mutate: settingData, data, isError, error } = useMutation({
    mutationFn: settingFn
  });

  // Handle settings form submission
  const settingsSubmit = async () => {
    const fields: User = {
      user: {
        email: "string",
        password: "string",
        username: "string",
        bio: "string",
        image: "string"
      }
    };
    settingData(fields);
  }

  if (isError) {
    console.log("error", error);
  }

  // Handle changes in settings form fields
  const fieldsHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }

  // Provide context values to children components
  return (
    <settingsContext.Provider value={{ settingsSubmit, fieldsHandleChange }}>
      {children}
    </settingsContext.Provider>
  );
}

export default SettingsProvider;
