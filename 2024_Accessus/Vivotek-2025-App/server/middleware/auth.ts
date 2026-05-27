export default defineEventHandler((event) => {
    const bearerToken = getCookie(event, 'token');
    
    event.context.auth = { bearerToken: bearerToken }
  })
  