// import axios from "axios";
// import { title } from "process";
// import { createContext, ReactNode, useState } from "react";
// import Cookies from 'js-cookie';
// import { useMutation } from "@tanstack/react-query";

// export const editorContext = createContext<any>(null)

// const EditorProvider = ({ children }: { children: ReactNode }) => {
    
//     interface Article {article:{ title: string; description: string; body: string; tagList: string[]; }}

//     const [articleField, setArticleFields] = useState<
//         {title:string, description:string, body:string, tagList:string}
//         >({
//         title: "",
//         description: "",
//         body: "",
//         tagList:""
//     })


//     const hanndleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setArticleFields({ ...articleField, [e.target.name]: e.target.value })
//     }

//     const articleFunction = async (article: Article) => {
//         const token = Cookies.get("token")
//         const response = await axios.post(`https://api.realworld.io/api/articles`, article, {
//             withCredentials: true,
//             headers: {
//                 Authorization: token
//             }
//         })

//         console.log(response.data)

//         return response.data
//     }

//     const { mutate } = useMutation({
//         mutationFn: articleFunction
//     })

//     const handleSubmit = async () => {
//         const article:Article ={article:{ title: articleField.title, description:articleField.description, body: articleField.body, tagList: [articleField.tagList]}}
//         mutate(article)
//     }

//   return (
//     <editorContext.Provider value={{handleSubmit, hanndleChange}}>
//         {children}
//     </editorContext.Provider>
//   )
// }

// export default EditorProvider


import axios from "axios";
import { createContext, ReactNode, useState } from "react";
import Cookies from 'js-cookie';
import { useMutation } from "@tanstack/react-query";

// Define a context for the editor
export const editorContext = createContext<any>(null)

interface EditorProviderProps {
    children: ReactNode;
}

// Define the Article interface
interface Article {
    article: {
        title: string;
        description: string;
        body: string;
        tagList: string[];
    }
}

// EditorProvider component which provides context to its children
const EditorProvider = ({ children }: EditorProviderProps) => {
    
    // State for article fields
    const [articleField, setArticleFields] = useState<{
        title: string;
        description: string;
        body: string;
        tagList: string;
    }>({
        title: "",
        description: "",
        body: "",
        tagList: ""
    })

    // Handle change in input fields
    const hanndleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArticleFields({ ...articleField, [e.target.name]: e.target.value })
    }

    // Function to post the article
    const articleFunction = async (article: Article) => {
        const token = Cookies.get("token")
        const response = await axios.post(`https://api.realworld.io/api/articles`, article, {
            withCredentials: true,
            headers: {
                Authorization: token
            }
        })

        console.log(response.data)

        return response.data
    }

    // useMutation hook for handling mutations
    const { mutate } = useMutation({
        mutationFn: articleFunction
    })

    // Handle form submission
    const handleSubmit = async () => {
        const article: Article = {
            article: {
                title: articleField.title,
                description: articleField.description,
                body: articleField.body,
                tagList: [articleField.tagList]
            }
        }
        mutate(article)
    }

    // Provide context values to children components
    return (
        <editorContext.Provider value={{ handleSubmit, hanndleChange }}>
            {children}
        </editorContext.Provider>
    )
}

export default EditorProvider
