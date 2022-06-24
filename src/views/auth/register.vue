<script setup lang="ts">
import { ref } from 'vue';

const emailOrPhone = ref<string>('');
const password = ref<string>('');
const secondPassword = ref<string>('');
</script>

<template>
    <div class="overflow-hidden bg-white shadow-xl -translate-y-44 md:translate-y-0 rounded-xl">
        <form class="text-2xl p-9" @submit.prevent="">
            <h2 class="mb-5 text-center">账户注册</h2>
            <BaseInputVue
                type="text"
                name="email"
                v-model="emailOrPhone"
                placeholder="邮箱或手机号"
            />
            <BaseInputVue
                class="mt-6"
                type="password"
                name="password"
                v-model="password"
                placeholder="密码"
            />
            <BaseInputVue
                class="mt-6"
                type="password"
                name="password"
                v-model="secondPassword"
                placeholder="二次密码"
            />
            <div class="px-2 mt-5 text-xs">
                <RouterLink to="/auth/login" class="float-right hover:underline">登录</RouterLink>
            </div>
            <div>
                <button type="submit" class="submit-button">登录</button>
            </div>
        </form>
    </div>
</template>

<style>
.submit-button {
    @apply block px-6 py-1 mx-auto mt-10 text-xl text-white duration-300 rounded-md bg-slate-800 focus:ring-2 ring-offset-1 ring-slate-800 hover:bg-slate-600;
}
</style>
