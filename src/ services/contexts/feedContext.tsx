import { createContext, ReactNode, useCallback, useState } from "react";
import axios from "axios"
import { useQuery } from "@tanstack/react-query";

export const feedContext = createContext<any>(null)


const FeedProvider = ({ children }: { children: ReactNode }) => {

  const getFeeds = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.realworld.io/api/articles?limit=100`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }, [])

  const { data:feedData, isError, isSuccess, error } = useQuery({
    queryKey: ["feeds"],
    queryFn: getFeeds
  })


  const getTags = useCallback(async() => {
    try {
      const response = await axios.get(`https://api.realworld.io/api/tags`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }, [])

  const { data:tagsData} = useQuery({
    queryKey: ["tags"],
    queryFn: getTags
  })
  
  return (
    <feedContext.Provider value={{feedData, tagsData}}>
      {children}
    </feedContext.Provider>
  )
}

export default FeedProvider
