export default defineNuxtRouteMiddleware(async (to) => {
  if (to.fullPath.includes('sign-in')) return;

  const authed = useState('authed');

  if (authed.value) {
    return;
  } else {
    return navigateTo({
      path: '/sign-in',
      query: { to: to.fullPath },
    });
    // return navigateTo('/sign-in');
  }
});
