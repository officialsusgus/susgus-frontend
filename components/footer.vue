<template>
    <footer class="text-center text-gray-400 dark:text-white dark:bg-gray-900">
        <p>© {{ year }} Emilio Persson. Skolmatsdata av <a class="text-blue-500 font-bold" href="https://skolmaten.se">Skolmaten</a>. AI av <a class="text-blue-500 font-bold" href="https://www.craiyon.com/">Craiyon</a>.</p>
    </footer>
</template>
<script setup lang="ts">
    const year = new Date().getFullYear();
</script>