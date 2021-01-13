import { Address } from '../Location'
import { MapConfig } from '../MapConfig'
import { MapProvider } from '../MapProvider'
import { StaticImageUrlGenerator } from './StaticImageUrlGenerator'

export class StaticImageUrlGeneratorGoogleMaps
  implements StaticImageUrlGenerator {
  generateUrl(address: Address, config: MapConfig, envConfig: Object): string {
    throw new Error('Not implemented')
  }

  provider(): MapProvider {
    return MapProvider.GOOGLE_MAPS
  }
}
