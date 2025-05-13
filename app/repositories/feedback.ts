export default function(appFetch: typeof $fetch) {
  return {
    create(body: FeedBackBody) {
      return appFetch('feedback.php', {
        method: 'POST',
        body: jsonFormData(body),
      })
    }
  }
}

export interface FeedBackBody {
  name: string,
  phone: string,
  time: string,
};
