<template>
	<div class="flex items-center justify-center h-screen dark:bg-gray-900">
	  <div class="card mx-8 w-full md:w-1/2 lg:w-1/3 bg-base-100 shadow-xl">
		<figure>
			<nuxt-img :src="image" class="w-full h-80"/>
		</figure>
		<div class="card-body p-6 md:p-8">
		  <h2 class="card-title text-2xl">{{ main }}</h2>
		  <p class="text-lg">{{ alternative }}</p>
		</div>
	  </div>
	</div>
</template>
<script setup lang="ts">
  let main = "Hämtar skolmat...", alternative = "Var god vänta, detta kan ta en stund.", image = "/img/error.png", config = useRuntimeConfig(), { data } = await useFetch(`${config.apiProtocol}://${config.apiHostname}${config.foodEndpoint}`);
  if(data?._value?.data.free) main = "Ledigt", alternative = "Njut av ledigheten!", image = "/img/free.png"; else main = data?._value?.data.main, alternative = data?._value?.data.alternative;
  if(data?._value?.image_ready) image = `${config.apiProtocol}://${config.apiHostname}${config.imageEndpoint}`;
</script>