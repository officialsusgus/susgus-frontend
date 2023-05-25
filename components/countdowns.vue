<template>
	<div class="flex h-screen dark:bg-gray-900 sticky">
		<div class="max-w-screen-md m-auto text-center">
            <p class="text-gray-600 dark:text-white font-bold mb-5 text-5xl">Nedräkningar</p>
            <p class="text-gray-400 mb-5 text-xl">Nurvarande tid: <a class="text-blue-500 font-bold">{{ time }}</a></p>
			<p class="text-gray-400">Sommarlov: <a class="text-blue-500 font-bold">{{ summer_holiday }}</a></p>
	  </div>
	</div>
</template>
<script setup lang="ts">
    let summer_holiday = ref("Laddar...");
    let time = ref("Laddar...");
    function mainThread() {
        const date = new Date();
        const summer_holiday_date = new Date(`${date.getFullYear()}-06-16T12:00:00`);
        const diff = summer_holiday_date.getTime() - date.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        summer_holiday.value = `${days} dagar, ${hours} timmar, ${minutes} minuter och ${seconds} sekunder`;
        time.value = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    };
    setInterval(mainThread, 1000);
</script>