import { Address } from '../Location'
import { MapConfig } from '../MapConfig'
import { StaticImageUrlGeneratorGoogleMaps } from './StaticImageUrlGeneratorGoogleMaps'
import { StaticImageUrlGeneratorMapbox } from './StaticImageUrlGeneratorMapbox'

const staticImageUrlGeneratorMapbox = new StaticImageUrlGeneratorMapbox()
const staticImageUrlGeneratorGoogleMaps = new StaticImageUrlGeneratorGoogleMaps()

const generators = [
  staticImageUrlGeneratorGoogleMaps,
  staticImageUrlGeneratorMapbox,
]

export const generateProviderImageUrl = (
  address: Address,
  config: MapConfig,
  envConfig: Object
): string | null => {
  const matchingGenerator = generators.find(
    (generator) => generator.provider() === config.provider
  )
  if (matchingGenerator) {
    return matchingGenerator.generateUrl(address, config, envConfig)
  } else {
    return null
  }
}
