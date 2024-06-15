
import axios from "axios";

/**
 * Fetches the details of an article based on its slug.
 * @param slug - The slug of the article.
 * @returns The article data.
 */
export const getArticleSlug = async (slug: string) => {
  const response = await axios.get(`https://api.realworld.io/api/articles/${slug}`);
  return response?.data?.article;
};

/**
 * Fetches the comments of an article based on its slug.
 * @param slug - The slug of the article.
 * @returns The comments of the article.
 */
export const getArticleComment = async (slug: string) => {
  const response = await axios.get(`https://api.realworld.io/api/articles/${slug}`);
  return response?.data?.article;
};
