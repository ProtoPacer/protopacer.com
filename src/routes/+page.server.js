// export function load({ setHeaders }) {
//   setHeaders({
//     'Content-Type': 'text/plain'
//   });
// }

export function load({ cookies }) {
	const visited = cookies.get('visited');
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	cookies.set('visited', 'true', { path: '/' });

	return {
		visited
	};
}
