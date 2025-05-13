import createHousesRepo from '@/repositories/houses';
import createFeedbackRepo from '@/repositories/feedback';

export default defineNuxtPlugin({
  name: 'api',
  dependsOn: [ 'fetch' ],
  setup() {
    const nuxtApp = useNuxtApp();
    const appFetch = nuxtApp.$appFetch;

    const houses = createHousesRepo(appFetch);
    const feedback = createFeedbackRepo(appFetch);

    return {
      provide: {
        api: {
          houses,
          feedback,
        }
      }
    }
  },
});
