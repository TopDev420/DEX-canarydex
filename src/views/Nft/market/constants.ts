import collections from 'config/constants/nftsCollections'
import { CollectionKey } from 'config/constants/nftsCollections/types'
import { getAddress } from 'utils/addressHelpers'

export const nftsBaseUrl = '/nfts'
export const pancakeBunniesAddress = getAddress(collections[CollectionKey.PANCANARY].address)
export const pancakeSquadAddress = getAddress(collections[CollectionKey.SQUAD].address)
