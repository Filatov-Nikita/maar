import createHousesRepo from '@/repositories/houses';

export default defineNuxtPlugin({
  name: 'api',
  dependsOn: [ 'fetch' ],
  setup() {
    const nuxtApp = useNuxtApp();
    const appFetch = nuxtApp.$appFetch;

    const houses = createHousesRepo(appFetch);

    return {
      provide: {
        api: {
          houses,
        }
      }
    }
  },
});
