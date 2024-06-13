import axios from "axios";

  const getArticleSlug = async (slug:string) => {
      const response = await axios.get(`https://api.realworld.io/api/articles/${slug}`)
      return response.data
  }


  

export default getArticleSlug
