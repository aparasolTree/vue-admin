<script setup lang="ts"></script>

<template>
    <div class="flex w-screen h-screen">
        <div class="w-[200px] bg-slate-600 h-full">
            <i class="fas fa-cat"></i>
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
