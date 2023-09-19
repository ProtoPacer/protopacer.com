import * as db from '$lib/server/database';

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		items: db.getItems(id) ?? []
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(data);
		console.log(cookies);
	}
};
