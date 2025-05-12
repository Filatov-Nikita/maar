export default defineNuxtPlugin({
  name: 'fetch',
  setup() {
    const config = useRuntimeConfig();

    const appFetch = $fetch.create({
      baseURL: config.public.apiBase,
      retry: false,
    });

    return {
      provide: {
        appFetch,
      }
    }
  }
});
