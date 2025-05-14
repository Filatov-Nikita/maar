export default function(appFetch: typeof $fetch) {
  return {
    all() {
      return appFetch<NewsListItem[]>('news.php');
    },
    show(code: string) {
      return appFetch<NewsOneRes>('news_detail.php', {
        params: { code },
      });
    },
    mainList() {
      return appFetch<MainListRes>('mainnews.php');
    },
  }
}

export interface NewsListItem {
  name: string;
  date: string;
  code: string;
  img:  string;
}

export type MainListRes = [ {
  data: NewsListItem[],
  props: [ { totalcount: number } ],
} ];

export interface NewsOne {
  name:         string;
  detail_text:  string;
  date:         string;
  code:         string;
  seo_title:    string;
  seo_descr:    string;
  seo_keywords: string;
  img:          string;
}

export type NewsOneRes = [ {
  data:     [ NewsOne ];
  add_news: NewsListItem[];
} ];
