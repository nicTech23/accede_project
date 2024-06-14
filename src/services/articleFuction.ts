import axios from "axios";


export const getArticleSlug = async (slug: string) => {
  const response = await axios.get(`https://api.realworld.io/api/articles/${slug}`);
  return response?.data?.article;
};

export const getArticleComment = async (slug: string) => {
  const response = await axios.get(`https://api.realworld.io/api/articles/${slug}`);
  return response?.data?.article;
};


