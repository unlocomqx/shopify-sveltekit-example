import '@shopify/shopify-app-remix/adapters/node';
import { ApiVersion, AppDistribution, shopifyApp } from '@shopify/shopify-app-remix/server';
import { DrizzleSessionStoragePostgres } from '@shopify/shopify-app-session-storage-drizzle';
import { db } from '$lib/server/db';
import { sessionTable } from '$lib/server/db/schema';
import {
	SCOPES,
	SHOP_CUSTOM_DOMAIN,
	SHOPIFY_API_KEY,
	SHOPIFY_API_SECRET,
	SHOPIFY_APP_URL
} from '$env/static/private';

const shopify = shopifyApp({
	apiKey: SHOPIFY_API_KEY,
	apiSecretKey: SHOPIFY_API_SECRET || '',
	apiVersion: ApiVersion.January25,
	scopes: SCOPES?.split(','),
	appUrl: SHOPIFY_APP_URL || '',
	authPathPrefix: '/auth',
	sessionStorage: new DrizzleSessionStoragePostgres(db, sessionTable),
	distribution: AppDistribution.AppStore,
	future: {
		unstable_newEmbeddedAuthStrategy: true,
		removeRest: true
	},
	...(SHOP_CUSTOM_DOMAIN ? { customShopDomains: [SHOP_CUSTOM_DOMAIN] } : {})
});

export default shopify;
export const apiVersion = ApiVersion.January25;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate = shopify.authenticate;
export const unauthenticated = shopify.unauthenticated;
export const login = shopify.login;
export const registerWebhooks = shopify.registerWebhooks;
export const sessionStorage = shopify.sessionStorage;
