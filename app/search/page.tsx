"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useQuery } from "react-query"

export default function SearchPage() {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = () => {
    router.push("search?query=hots")
  }

  console.log(params.get("query"))

  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://api.chucknorris.io").then((response) => response.json())
  )
  console.log(data)
  return (
    <>
      <h1 onClick={handleClick}>test</h1>
    </>
  )
}
