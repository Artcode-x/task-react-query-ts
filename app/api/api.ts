import axios from "axios"
import { ErrorMessage, JokesResponse } from "../interface/interface"

export const fetchJokes = async (query: string) => {
  const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)

  if (!response) {
    throw new Error("Что то не так, попробуйте позднее")
  }
  console.log(response.data)

  return response.data
}

// export const fetchJokes = async (query: string): Promise<JokesResponse | ErrorMessage> => {
//   try {
//     const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)

//     if (!response) {
//       throw new Error("Network response was not ok")
//     }

//     return response.data
//   } catch (error) {
//     return { message: "Error fetching jokes: " + error }
//   }
// }
