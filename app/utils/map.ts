import type { LngLat } from '@yandex/ymaps3-types';

export function parseCoords(str: string): LngLat {
  const [ lat, lng ] = str.split(',');
  if(!lat || !lng) throw new Error();
  return [ parseFloat(lng), parseFloat(lat), ];
}
