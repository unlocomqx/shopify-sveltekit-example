import { authenticate } from '$lib/server/shopify';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { request } = event;

	await authenticate.admin(request);

	return resolve(event);
};
