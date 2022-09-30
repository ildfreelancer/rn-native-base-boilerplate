import {QueryClient} from '@tanstack/react-query'
import DeviceInfo from 'react-native-device-info'
import {persistQueryClient} from '@tanstack/react-query-persist-client'
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister'
import {getAsyncStorage, Storage} from '@utils/mmkv'

const asyncStoragePersistor = createAsyncStoragePersister({
  storage: getAsyncStorage(Storage.instance),
})

export function initPersistor(queryClient: QueryClient) {
  persistQueryClient({
    queryClient,
    persister: asyncStoragePersistor,
    buster: DeviceInfo.getVersion(),
  })
}
