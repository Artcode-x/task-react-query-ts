"use client"
import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"
import { QueryClient, QueryClientProvider } from "react-query"
import { useState } from "react"

export default function Home() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <h1>home</h1>
        <Link href={"/components/search"}>поиск</Link>
      </main>
    </QueryClientProvider>
  )
}
