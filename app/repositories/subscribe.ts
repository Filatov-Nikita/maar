export default function(appFetch: typeof $fetch) {
  return {
    create(body: SubscribeBody) {
      return appFetch('subscribe.php', {
        method: 'POST',
        body: jsonFormData(body),
      })
    }
  }
}

export interface SubscribeBody {
  email: string,
};
