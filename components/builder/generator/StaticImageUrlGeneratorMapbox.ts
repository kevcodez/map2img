import { Address } from '../Location'
import { MapConfig } from '../MapConfig'
import { MapProvider } from '../MapProvider'
import { StaticImageUrlGenerator } from './StaticImageUrlGenerator'

export class StaticImageUrlGeneratorMapbox implements StaticImageUrlGenerator {
  generateUrl(address: Address, config: MapConfig, envConfig: Object): string {
    // @ts-ignore
    const mapboxKey = envConfig.mapboxKey

    const lat = address.coordinates.latitude
    const lng = address.coordinates.longitude

    const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(${lat},${lng})/${lat},${lng},${config.zoom},${config.rotation},${config.tilt}/1000x600@2x?access_token=${mapboxKey}`

    return url
  }

  provider(): MapProvider {
    return MapProvider.MAPBOX
  }
}
