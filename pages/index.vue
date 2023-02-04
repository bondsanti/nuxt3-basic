<template>
    <div>
        <Head>
            <Title>หน้าหลัก</Title>
            <Meta name="description" content="Basic Nuxt 3" />
        </Head>
        <div class="min-h-screen hero bg-base-200">
            <div class="text-center hero-content">
                <div class="max-w-md">
                    <h1 class="my-text">สวัสดี</h1>
                    <h1 class="text-5xl font-bold">Hello there</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout:'default'
    })
</script>

<style scoped>

</style>