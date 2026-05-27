export default defineEventHandler((event) => {
    const locale = getCookie(event, 'i18n_redirected');
    
    event.context.i18n = { locale }
  })
  