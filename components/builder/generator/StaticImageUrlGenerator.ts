import { Address } from '../Location'
import { MapConfig } from '../MapConfig'
import { MapProvider } from '../MapProvider'

export interface StaticImageUrlGenerator {
  generateUrl(address: Address, config: MapConfig, envConfig: Object): string

  provider(): MapProvider
}
