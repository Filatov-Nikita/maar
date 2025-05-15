import createHousesRepo from '@/repositories/houses';
import createFeedbackRepo from '@/repositories/feedback';
import createNewsRepo from '@/repositories/news';
import createSubscribeRepo from '@/repositories/subscribe';

export default defineNuxtPlugin({
  name: 'api',
  dependsOn: [ 'fetch' ],
  setup() {
    const nuxtApp = useNuxtApp();
    const appFetch = nuxtApp.$appFetch;

    const houses = createHousesRepo(appFetch);
    const feedback = createFeedbackRepo(appFetch);
    const news = createNewsRepo(appFetch);
    const subscribe = createSubscribeRepo(appFetch);

    return {
      provide: {
        api: {
          houses,
          feedback,
          news,
          subscribe,
        }
      }
    }
  },
});
