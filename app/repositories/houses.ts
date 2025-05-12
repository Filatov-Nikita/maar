export default function(appFetch: typeof $fetch) {
  return {
    home() {
      return appFetch('mainmap.php');
    },
  }
}
