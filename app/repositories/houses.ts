export default function(appFetch: typeof $fetch) {
  return {
    home(params: Partial<ListParams> = {}) {
      return appFetch<HomeHouseOne[]>('mainmap.php', {
        params: {
          type: params.type,
        }
      });
    },
    show(code: string) {
      return appFetch<[ HouseShowed ]>('doma_detail.php', {
        params: { code },
      });
    },
    allRealesed() {
      return appFetch<HouseRealesedOne[]>('realesed.php');
    },
    showRealesed(code: string) {
      return appFetch<[ HouseRealesedShowed ]>('realesed_detail.php', {
        params: { code },
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

export interface HouseOption {
  name: string;
  text: string;
  img:  string;
}

export interface HouseShowed {
  name:         string;
  type:         string;
  ploshad_doma: string;
  coordinates:  string;
  ploshad_uch:  string;
  text:         string;
  osn_har:      HouseOption[];
  dlya_hoz:     HouseOption[];
  dlya_pers:    HouseOption[];
  galery:       string[];
  ext:          string[];
  int:          string[];
  plan:         string[];
  code:         string;
  seo_title:    string;
  seo_descr:    string;
  seo_keywords: string;
}

export interface HouseRealesedOne {
  name:         string;
  napravlenie:  string;
  god:          string;
  ploshad_doma: string;
  ploshad_uch:  string;
  code:         string;
  img:          string;
}

export interface HouseRealesedShowed {
  name:         string;
  napravlenie:  string;
  god:          string;
  ploshad_doma: string;
  ploshad_uch:  string;
  text:         string;
  osn_har:      HouseOption[];
  dlya_hoz:     HouseOption[];
  dlya_pers:    HouseOption[];
  galery:       string[];
  ext:          string[];
  int:          string[];
  plan:         string[];
  code:         string;
  seo_title:    string;
  seo_descr:    string;
  seo_keywords: string;
}
