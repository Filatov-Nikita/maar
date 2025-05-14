import createHousesRepo from '@/repositories/houses';
import createFeedbackRepo from '@/repositories/feedback';
import createNewsRepo from '@/repositories/news';

export default defineNuxtPlugin({
  name: 'api',
  dependsOn: [ 'fetch' ],
  setup() {
    const nuxtApp = useNuxtApp();
    const appFetch = nuxtApp.$appFetch;

    const houses = createHousesRepo(appFetch);
    const feedback = createFeedbackRepo(appFetch);
    const news = createNewsRepo(appFetch);

    return {
      provide: {
        api: {
          houses,
          feedback,
          news,
        }
      }
    }
  },
});
