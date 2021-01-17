import { Address } from '../Location'
import { MapConfig } from '../MapConfig'
import { MapProvider } from '../MapProvider'
import { StaticImageUrlGenerator } from './StaticImageUrlGenerator'

const mapIds: Record<string, string> = {
  'Real Estate': 'c5c00cd27d2d32ab',
  Travel: '9908d6e73a73d9f',
  Classic: 'c3bbfbb7f55d483',
  Light: 'b5436edd79f626fb',
  Atlas: '72c553ca4c694c6f',
  Night: '6b5b4ce0704bc630',
  Grey: '5f0476f06e59ccee',
}

export class StaticImageUrlGeneratorGoogleMaps implements StaticImageUrlGenerator {
  generateUrl(address: Address, config: MapConfig, envConfig: Object): string {
    const cooordinates = address.coordinates
    const mapId = mapIds[config.style] || 'c3bbfbb7f55d483'

    const urlParams: Record<string, any> = {
      // @ts-ignore
      key: envConfig.googleMapsKey,
      center: `${cooordinates.longitude}, ${address.coordinates.latitude}`,
      zoom: config.zoom,
      size: `${config.width}x${config.height}`,
      map_id: mapId,
      markers: config.markerEnabled
        ? `color:0x${config.markerColor.replace('#', '')}|${cooordinates.longitude}, ${address.coordinates.latitude}`
        : '',
    }

    const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap'
    const queryString = new URLSearchParams(urlParams).toString()

    return baseUrl + '?' + queryString
  }

  provider(): MapProvider {
    return MapProvider.GOOGLE_MAPS
  }
}
