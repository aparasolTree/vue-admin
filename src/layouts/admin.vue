<script setup lang="ts">
import Menu from './components/Menu.vue';
</script>

<template>
    <div class="flex w-screen h-screen">
        <div class="w-[200px] bg-slate-800 h-full">
            <div class="flex items-center justify-center p-3 text-xl text-white bg-slate-900">
                <i class="fas fa-cat"></i>
                <span class="ml-3 text-sm">后台管理</span>
            </div>
            <div><Menu /></div>
        </div>
        <div class="flex-1 bg-slate-100"><RouterView /></div>
    </div>
</template>

<script lang="ts">
export default {
    route: {
        meta: { auth: true },
    },
};
</script>
