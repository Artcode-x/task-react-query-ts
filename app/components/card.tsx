import React from "react"
import { Joke } from "../interface/interface"

const JokeCard = ({ jokeValue }: { jokeValue: string }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        margin: "8px",
        borderRadius: "8px",
      }}
    >
      <p>{jokeValue}</p>
    </div>
  )
}

export default JokeCard
