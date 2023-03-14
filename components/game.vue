<template>
    <div class="flex h-screen dark:bg-gray-900 sticky -z-[1]">
		<div class="m-auto">
			<img onclick="clicks += 1" src="/img/logo.png" />
            <p v-if="clicks != 0">Antal klick: {{ clicks }}</p>
		</div>
	</div>
</template>
<script setup lang="ts">
	let clicks = 0;
</script>