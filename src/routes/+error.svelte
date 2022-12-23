<script>
	import { page } from '$app/stores';
</script>

<div class="h-full flex flex-col justify-center">
	<h1>
		<span class="text-9xl">{$page.status}</span> <br />
		<span class="text-4xl">{$page.error?.message}</span>
	</h1>
</div>
