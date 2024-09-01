import React from "react"
import S from "./card.module.css"

const JokeCard = ({ jokeValue }: { jokeValue: string }) => {
  return (
    <div className={S.card}>
      <p>{jokeValue}</p>
    </div>
  )
}

export default JokeCard
