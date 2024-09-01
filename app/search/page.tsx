"use client"

import { Provider } from "react-redux"
import store from "../store/store"
import { QueryClient, QueryClientProvider } from "react-query"
import SearchPage from "../pages/search"

const queryClient = new QueryClient()

export default function Search() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SearchPage />
      </QueryClientProvider>
    </Provider>
  )
}
