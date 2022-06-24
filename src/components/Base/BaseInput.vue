<script setup lang="ts">
defineProps<{
    type: string;
    placeholder?: string;
    name?: string;
    modelValue?: string;
}>();
defineEmits<{
    (event: 'update:modelValue', value: string): void;
}>();
</script>

<template>
    <input
        class="base-input"
        :type="type"
        :name="name"
        autocomplete="off"
        :placeholder="placeholder"
        @input="(e) => $emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
</template>

<style>
.base-input {
    @apply px-4 text-xl block h-10 border-b-2 outline-none w-[300px] placeholder:text-sm focus:ring-1 ring-offset-1 ring-slate-800 duration-300 rounded-sm;
}
</style>
