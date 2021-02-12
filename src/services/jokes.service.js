import axios from 'axios'

export const getJoke = async (
  category
) => {
  const response = await axios.get(`${process.env.REACT_APP_API_JOKES}random${category ? `?category=${category}` : ''}`)
  return response.data
}

export const getCategories = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_JOKES}categories`)
  return response.data
}