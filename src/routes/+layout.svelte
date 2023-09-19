<script>
	import '../app.css';
</script>

<!-- Navbar "container" for full-width background -->
<nav class="bg-slate-50">
	<!-- Positioning and styling navbar content -->
	<div class="me-auto ms-auto flex max-w-5xl justify-between py-4 px-4 box-content">
		<a href="/" class="text-sm font-bold tracking-wider">
			<span class="text-green-600">//</span> PROTOPACER
		</a>
		<a href="/about" class="font-mono text-xs">ABOUT</a>
	</div>
</nav>
<slot />
