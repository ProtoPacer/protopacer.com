import { posts } from './data.js';

console.log('loaded');

for (let post in posts) {
	console.log(post);
}

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
