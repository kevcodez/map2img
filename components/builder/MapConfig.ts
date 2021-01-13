import { MapProvider } from './MapProvider'

export type MapConfig = {
  provider: MapProvider
  style: string
  rotation: number
  tilt: number
  zoom: number
  height: number
  width: number
  markerEnabled: boolean
}
