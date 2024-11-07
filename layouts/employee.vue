<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <nuxt-link to="/" class="font-bold text-2xl">Back</nuxt-link>
            </nav>
        </header>

        <!-- Output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <nav class="container mx-auto p-4">
                <nuxt-link to="/" class="font-bold text-2xl">Back</nuxt-link>
            </nav>
        </footer>
       
    </div>
</template>

<style scoped></style>

