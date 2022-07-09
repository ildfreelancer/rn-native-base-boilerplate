import {QueryClient} from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 2, // No retry mode for the demo
    },
  },
})
