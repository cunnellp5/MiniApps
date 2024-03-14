<script>
    // @ts-nocheck
	import { page } from '$app/stores';
</script>

<h1>Reddit</h1>
<h2>{$page.status}: {$page.error.message}</h2>

<a href="/r">Search again...</a>