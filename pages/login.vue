<script setup lang="ts">
const username = ref('')
const password = ref('')
async function login(){
    if (!username.value || !password.value) {
        useNuxtApp().$toast.error('Please enter username and password first', {
            autoClose: 3000,
        })
        return
    }
    const formData = new FormData()
    formData.append('username', username.value)
    formData.append('password', password.value)
    try {
        await $fetch('/api/login/password/signin', {
            method: 'POST',
            body: formData,
        })
    } catch (e) {
        useNuxtApp().$toast.error(`Login failed: ${e}`, {
            autoClose: 3000,
        })
    }
}
</script>

<template>
    <div pt-20 flex="~ col" w-80 mx-auto>
        <p text-2xl text-center mb-5>Login</p>
        <label text-sm>Username or Email</label>
        <input type="text" v-model="username">
        <label text-sm>Password</label>
        <input type="password" v-model="password">
        <button @click="login()" bg-green>Login</button>
        <div flex="~ row" gap-2 pt-3>
            <label>Or login with </label>
            <NuxtLink to="/api/login/github" class="inline-block"><div i-carbon-logo-github></div></NuxtLink>
        </div>
    </div>
</template>

<style scoped>
input {
    --at-apply: rounded-lg bg-gray-300 dark:bg-gray-500 px-5 py-2 mt-2 mb-5;
}
button {
    --at-apply: rounded-lg px-5 py-2;
}
</style>