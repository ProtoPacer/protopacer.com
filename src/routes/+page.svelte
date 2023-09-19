<script>
	export let data;
	import { message } from '$lib/message.js';
	import hawk from '$lib/assets/hawk.png';
</script>

<div class="m-auto box-content max-w-5xl px-4 py-10">
	<!-- Herolike container to enable sidebar layout -->
	<div class="flex items-start gap-5">
		<!-- `items-start` so hawk picture won't be forced to stretch their height of hero text. -->
		<!-- (main content) `basis-0` to start from nothing and grow to 999 until it fits ~3/4 space (approx b/c I want main content to scale down for gap.). -->
		<div class="stack min-w-[70%] grow basis-0">
			<div>
				<p class="pb-2 text-orange-600">Rylan's tech blog</p>
				<h1 class="text-display text-5xl font-bold">
					Earning <span class="text-green-500">security certs</span> so you don't have to.
				</h1>
			</div>
			<p class="text-xl text-neutral-500 md:w-[50ch]">
				Frameworks help with security, but blind reliance leaves developers vulnerable and stagnant
				in their abilities. Follow Hawk and I as we bridge the gap between programming and security.
			</p>
			<button
				class="group flex w-72 items-center gap-4 rounded-full bg-neutral-200 py-2 pe-2 ps-6 font-semibold shadow-[inset_0_0_1px_rgba(0,0,0,0.11)]"
			>
				<a href="/security-for-developers"
					><span class="min-w-[50%] grow basis-0 text-left">Learn beyond frameworks</span></a
				>
				<span class="me-[0.1rem] grow-0 basis-[40px] rounded-full bg-blue-500">
					<svg
						viewBox="0 0 36 36"
						xmlns="http://www.w3.org/2000/svg"
						class="translate-x-1.5 translate-y-1.5 fill-white group-hover:opacity-100 md:opacity-50"
					>
						<path
							d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
						/>
					</svg>
				</span>
			</button>
		</div>
		<!-- Hide on small devices, `basis-1/4 grow-0`: fixed size sidebar, `h-auto w-20 min-w-[12rem]`: img sizing -->
		<img
			class="hidden h-auto min-w-[10rem] grow-0 basis-1/4 self-end md:block"
			src={hawk}
			alt="Carved figurine of a crow nicknamed 'Hawk' purchased from a Voodoo shop."
		/>
	</div>

	<div class="flex w-2/3 flex-row flex-wrap justify-between gap-12 pt-20">
		<div class="">
			<h1 class="mb-5 text-2xl font-bold">Regular features</h1>
			<ul class="text-blue-500">
				<li class="mt-1">
					<a href="/security-for-developers" class="icon hover:underline">Security for developers</a
					>
				</li>
				<li class="mt-1 text-neutral-500">
					<!-- <a href="/security-deep-dives" class="icon"> -->
					Deep dives (coming soon)
					<!-- </a> -->
				</li>
				<li class="mt-1 text-neutral-500">Toolkits (coming soon)</li>
				<li class="mt-1 text-neutral-500">Case studies (coming soon)</li>
			</ul>
		</div>

		<div class="">
			<h1 class="mb-5 text-2xl font-bold">Blog filters</h1>
			<ul class="text-blue-500">
				<li class="text-neutral-500">
					<!-- <a href="/blog" class="icon"> -->
					Security mistake of the month (soon)
					<!-- </a> -->
				</li>
				<li class="mt-1 text-neutral-500">
					<!-- <a href="/blog" class="icon"> -->
					From the trenches (coming soon)
					<!-- </a> -->
				</li>
				<li class="mt-1 text-neutral-500">
					<!-- <a href="/blog" class="icon"> -->
					Security challenges (coming soon)
					<!-- </a> -->
				</li>
				<li class="mt-1 text-neutral-500">
					<!-- <a href="/blog#security-architectures"> -->
					Security architectures (coming soon)
					<!-- </a> -->
				</li>
			</ul>
		</div>
	</div>
</div>

<div class="bg-black mt-12">
	<div class="me-auto ms-auto box-content flex max-w-5xl flex-wrap gap-8 p-12">
		<div class="me-auto ms-auto self-center text-center sm:text-left">
			<p class="text-white">learn from</p>
			<h2 class="text-4xl text-green-400">Hawk's Digital Nest</h2>
			<p class="text-white">empowering your tech journey</p>
		</div>

		<div
			class="me-auto ms-auto grid grid-cols-2 place-content-center gap-4 bg-transparent font-semibold text-white"
		>
			<div class="box-content h-28 w-28 border border-white p-1 hover:bg-white hover:text-black">
				Question snippets (coming soon)
			</div>
			<div class="box-content h-28 w-28 border border-white p-1 hover:bg-white hover:text-black">
				Experiments (coming soon)
			</div>
			<div class="box-content h-28 w-28 border border-white p-1 hover:bg-white hover:text-black">
				Quizzes (coming soon)
			</div>
			<div class="box-content h-28 w-28 border border-white p-1 hover:bg-white hover:text-black">
				Cheatsheets (coming soon)
			</div>
		</div>
	</div>
</div>

<!-- <h1 class="text-3xl font-bold underline">
  Hello, {data.visited ? 'friend' : 'stranger'}
</h1>

<p>{message}</p> -->

<style>
	.stack > * {
		margin-block: 0;
	}

	.stack > * + * {
		margin-block-start: var(--space, 2.5rem);
	}

	.icon::after {
		content: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="0.75em" height="0.75em"><path stroke="rgb(59 130 246)" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" fill="none" d="M10 7L15 15L10 22"></path></svg>');
		padding-inline-start: 0.05em;
		white-space: nowrap;
		transition: padding-inline-start 0.3s ease;
	}

	.icon:hover::after {
		/* padding-inline-start: 0.1em; */
		padding-inline-start: 0.3em;
	}
</style>
