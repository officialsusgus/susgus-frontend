<template>
	<div class="flex h-screen dark:bg-gray-900 sticky">
		<div class="m-auto">
		<button @click="addClick">
			<img src="/img/logo.png" />
		</button>
		<p v-if="clicks != 0" class="text-center"><a class="text-gray-400 dark:text-white">Antal klick:</a> <a class="text-blue-500 font-bold">{{ clicks }}</a></p>
	  </div>
	</div>
</template>
<script setup lang="ts">
	let clicks = ref(0);
	function addClick() {
		clicks.value += 1;
	};
</script>