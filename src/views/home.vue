<script setup lang="ts">
import BaseButton from '@/components/Base/BaseButton.vue';
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen bg-slate-200">
        <img
            class="w-[200px] border-[6px] shadow-lg border-white rounded-full"
            src="https://avatars.githubusercontent.com/u/103309515?s=400&u=4b79502b5524576efc6526c034dd6cac5d265374&v=4"
            alt="aParasolTree"
        />
        <div class="flex w-[230px] justify-between">
            <RouterLink :to="{ name: 'admin.home' }">
                <BaseButton class="text-sm">后台管理</BaseButton>
            </RouterLink>
            <RouterLink :to="{ name: 'auth.login' }">
                <BaseButton class="text-sm">用户登录</BaseButton>
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    route: {
        meta: {
            auth: true,
        },
    },
};
</script>
