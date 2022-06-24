<script setup lang="ts">
import { ref } from 'vue';

const emailOrPhone = ref<string>('');
const password = ref<string>('');
</script>

<template>
    <div class="overflow-hidden bg-white shadow-xl -translate-y-44 md:translate-y-0 rounded-xl">
        <form class="text-2xl p-9" @submit.prevent="">
            <h2 class="mb-5 text-center">后台登录</h2>
            <BaseInput type="text" name="email" v-model="emailOrPhone" placeholder="邮箱或手机号" />
            <BaseInput
                class="mt-6"
                type="password"
                name="password"
                v-model="password"
                placeholder="密码"
            />
            <div class="flex justify-between px-2 mt-5 text-xs">
                <RouterLink to="/auth/register" class="hover:underline">注册账号</RouterLink>
                <RouterLink to="/" class="hover:underline"> 忘记密码？ </RouterLink>
            </div>
            <div>
                <BaseButton>登录</BaseButton>
            </div>
        </form>
    </div>
</template>

<style></style>
