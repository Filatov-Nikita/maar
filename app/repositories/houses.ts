export default function(appFetch: typeof $fetch) {
  return {
    home(params: Partial<ListParams> = {}) {
      return appFetch<HomeHouseOne[]>('mainmap.php', {
        params: {
          type: params.type,
        }
      });
    },
  }
}

export type ListParams = {
  type: '1' | '2',
};

export interface HomeHouseOne {
  name:        string;
  id:          string;
  code:        string;
  type:        string;
  area:        string;
  coordinates: string;
  img:         string;
}
