"use client"

import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import JokeCard from "../components/card"
import { useRouter, useSearchParams } from "next/navigation"
import { fetchJokes } from "../api/api"
import { useDispatch, useSelector } from "react-redux"
import { updateTotalCount } from "../store/reducersSlice"
import { totalCountResults } from "../store/toolkitSelectors"
import S from "./search.module.css"
import { Joke } from "../interface/interface"

const SearchPage = () => {
  const router = useRouter()
  const params = useSearchParams()

  const initialQuery = params.get("query") || ""
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery)
  const [errMsg, setErrMsg] = useState("")

  const dispatch = useDispatch()
  const total_count = useSelector(totalCountResults)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "/search")
    }
    setSearchQuery(initialQuery)
  }, [])

  const {
    data: jokes,
    isLoading,
    error,
  } = useQuery(["jokes", searchQuery], () => fetchJokes(searchQuery), {
    enabled: typeof searchQuery === "string" && searchQuery.length >= 4,
  })

  // Деструктуризация для total и result
  const total = jokes?.total || 0
  const result: Joke[] = jokes?.result || []

  useEffect(() => {
    if (total != 0) {
      dispatch(updateTotalCount(total))
    } else {
      dispatch(updateTotalCount(0))
    }
  }, [total])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputQuery = e.target.value
    setSearchQuery(inputQuery)

    // Обновление адресной строки без перезагрузки
    //  const url = new URL(window.location.origin + "/search")
    // if (inputQuery) {
    router.push(`search?query=${inputQuery}`)

    //   url.searchParams.set("query", inputQuery)
    // } else {
    //   url.searchParams.delete("query") // Удаляем параметр, если пусто
    // }
    // window.history.pushState({}, "", url)
  }
  console.log(error as Error)

  useEffect(() => {
    if (error instanceof Error) {
      setErrMsg(error.message)
    }
  }, [error])

  return (
    <div className={S.container}>
      <form className={S.form}>
        <input
          type="text"
          name="query"
          placeholder="Поиск шуток"
          value={searchQuery}
          onChange={handleInputChange}
          className={S.input}
        />
        {`Total count: ${total_count}`}
      </form>

      {isLoading && <p>Загрузка...</p>}
      <>{errMsg && <p className={S.error}>Ошибка при получении шуток: {errMsg}</p>}</>

      <div className={S.jokeGrid}>
        {result && result.map((joke) => <JokeCard key={joke.id} jokeValue={joke.value} />)}
      </div>
    </div>
  )
}

export default SearchPage
