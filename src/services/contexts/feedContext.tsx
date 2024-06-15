// import { createContext, ReactNode, useCallback, useState } from "react";
// import axios from "axios"
// import { useMutation, useQuery } from "@tanstack/react-query";

// export const feedContext = createContext<any>(null)


// const FeedProvider = ({ children }: { children: ReactNode }) => {
//   const [feed, setFeed] = useState<any>(null)
//   const getFeeds = useCallback(async () => {
//     try {
//       const response = await axios.get(`https://api.realworld.io/api/articles?limit=100`)
//       return response.data
//     } catch (error) {
//       console.log(error)
//     }
//   }, [])

//   const { data:feedData, isError, isSuccess, error } = useQuery({
//     queryKey: ["feeds"],
//     queryFn: getFeeds
//   })


//   const getTags = useCallback(async() => {
//     try {
//       const response = await axios.get(`https://api.realworld.io/api/tags`)
//       return response.data
//     } catch (error) {
//       console.log(error)
//     }
//   }, [])

//   const { data:tagsData} = useQuery({
//     queryKey: ["tags"],
//     queryFn: getTags
//   })


//   const getPopulaTagArticle = async (tag: string) => {
//     try {
//       const response = await axios.get(`https://api.realworld.io/api/articles?tag=${tag}&limit=10`)
//       console.log(response.data)
//       return response.data
//     } catch (error) {
      
//     }
//   }

//   const {mutate, data:tagFeedData, isSuccess:isTagFeedSuccess} = useMutation({
//     mutationFn: getPopulaTagArticle
//   })

//   const getPopulaTagArticleHundle = async (tag:string) => {
//     mutate(tag)
//   }
  
//   return (
//     <feedContext.Provider value={{feedData, tagsData, tagFeedData, getPopulaTagArticleHundle}}>
//       {children}
//     </feedContext.Provider>
//   )
// }

// export default FeedProvider


import { createContext, ReactNode, useCallback, useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

// Define a context for the feed
export const feedContext = createContext<any>(null);

interface FeedProviderProps {
  children: ReactNode;
}

// FeedProvider component which provides context to its children
const FeedProvider = ({ children }: FeedProviderProps) => {
  const [feed, setFeed] = useState<any>(null);

  // Function to fetch feeds
  const getFeeds = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.realworld.io/api/articles?limit=100`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  // useQuery hook for fetching feeds
  const { data: feedData, isError, isSuccess, error } = useQuery({
    queryKey: ["feeds"],
    queryFn: getFeeds
  });

  // Function to fetch tags
  const getTags = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.realworld.io/api/tags`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  // useQuery hook for fetching tags
  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: getTags
  });

  // Function to fetch popular articles by tag
  const getPopulaTagArticle = async (tag: string) => {
    try {
      const response = await axios.get(`https://api.realworld.io/api/articles?tag=${tag}&limit=10`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // useMutation hook for fetching popular articles by tag
  const { mutate, data: tagFeedData, isSuccess: isTagFeedSuccess } = useMutation({
    mutationFn: getPopulaTagArticle
  });

  // Handler to fetch popular articles by tag
  const getPopulaTagArticleHundle = async (tag: string) => {
    mutate(tag);
  };

  // Provide context values to children components
  return (
    <feedContext.Provider value={{ feedData, tagsData, tagFeedData, getPopulaTagArticleHundle }}>
      {children}
    </feedContext.Provider>
  );
}

export default FeedProvider;
