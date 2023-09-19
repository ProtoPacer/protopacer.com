<script>
	export let data;
</script>

<h1 class="text-4xl">blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}" class="text-sky-500 underline underline-offset-4">{title}</a></li>
	{/each}
</ul>
