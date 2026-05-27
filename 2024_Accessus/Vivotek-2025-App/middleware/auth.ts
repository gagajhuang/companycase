import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created


export default defineNuxtRouteMiddleware((to) => {
	const { authenticated, token } = storeToRefs(useAuthStore()); // make authenticated state reactive
	const cookieToken = useCookie('token', { secure: true });
	const localePath = useLocalePath();	
	const pathName: string = to?.name as string;
	const locale = pathName.split('___')[1];

	if(!!!cookieToken.value && !!!to.fullPath.includes('login')) {
		return navigateTo(localePath('/login'));
	}

	if (cookieToken.value) {
		authenticated.value = true;
		token.value = cookieToken.value;
	}
});
