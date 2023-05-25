<template>
    <section class="flex bg-white dark:bg-gray-900 self-center h-screen">
		<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Se skolmaten.</h1>
				<p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Med Sus Gus kan du se skolmaten som serveras på din skola med advancerad AI-teknik som visualiserar skolmaten.</p>
				<a href="/food" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
					<div>Se skolmaten</div><Icon name="fa6-solid:arrow-right" class="ml-2"/>
                </a>
				<NuxtLink to="/game" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
					<div>Spel</div><Icon name="fa6-regular:face-smile" class="ml-2"/>
				</NuxtLink>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="/img/food.svg">
            </div>
		</div>
	</section>
</template>