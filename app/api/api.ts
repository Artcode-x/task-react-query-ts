import axios from "axios"

export const fetchJokes = async (query: string) => {
  const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
  if (!response) {
    throw new Error("Что то не так, попробуйте позднее")
  }
  console.log(response.data)

  return response.data
}
