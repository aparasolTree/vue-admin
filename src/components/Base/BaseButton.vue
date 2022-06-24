<script setup lang="ts"></script>

<template>
    <button type="submit" class="submit-button"><slot name="default" /></button>
</template>

<style scoped>
button.submit-button {
    @apply block px-6 py-1 mx-auto mt-10 text-xl text-white duration-300 rounded-md bg-slate-800 focus:ring-2 ring-offset-1 ring-slate-800 hover:bg-slate-600;
}
</style>
