export interface Joke {
  id: string
  value: string
  joke: string
}

export interface JokesResponse {
  total: number
  result: Joke[]
}
