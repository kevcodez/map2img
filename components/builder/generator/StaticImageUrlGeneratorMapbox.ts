import { Address } from '../Location'
import { MapConfig } from '../MapConfig'
import { MapProvider } from '../MapProvider'
import { StaticImageUrlGenerator } from './StaticImageUrlGenerator'

const mapStyle: Record<string, string> = {
  Streets: 'streets-v11',
  Light: 'light-v10',
  Dark: 'dark-v10',
  Outdoors: 'outdoors-v11',
  Satellite: 'satellite-v9',
}

export class StaticImageUrlGeneratorMapbox implements StaticImageUrlGenerator {
  generateUrl(address: Address, config: MapConfig, envConfig: Object): string {
    // @ts-ignore
    const mapboxKey = envConfig.mapboxKey

    const lat = address.coordinates.latitude
    const lng = address.coordinates.longitude

    const style = mapStyle[config.style] || 'streets-v11'

    const url = `https://api.mapbox.com/styles/v1/mapbox/${style}/static/pin-l+000(${lat},${lng})/${lat},${lng},${config.zoom},${config.rotation},${config.tilt}/1000x600@2x?access_token=${mapboxKey}`

    return url
  }

  provider(): MapProvider {
    return MapProvider.MAPBOX
  }
}
