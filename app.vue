<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">
    const description = "Med Sus Gus kan du se skolmaten som serveras på din skola med advancerad AI-teknik som visualiserar skolmaten."
    useServerSeoMeta({
        title: "Sus Gus - Se skolmaten.",
        ogTitle: "Se skolmaten | Sus Gus",
        description: description,
        ogDescription: description,
        ogImage: "https://susgus.se/img/emoji.png",
        twitterCard: "summary_large_image",
        themeColor: "#181c24"
    });
</script>