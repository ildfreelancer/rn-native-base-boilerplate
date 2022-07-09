import {QueryClient} from 'react-query'
import {persistQueryClient} from 'react-query/persistQueryClient-experimental'
import {createAsyncStoragePersistor} from 'react-query/createAsyncStoragePersistor-experimental'
import AsyncStorage from '@react-native-async-storage/async-storage'

const asyncStoragePersistor = createAsyncStoragePersistor({
  storage: AsyncStorage,
})

export function initPersistor(queryClient: QueryClient) {
  persistQueryClient({
    queryClient,
    persistor: asyncStoragePersistor,
    buster: '1',
  })
}
