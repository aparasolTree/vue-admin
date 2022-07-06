<script setup lang="ts">
import type { Menu } from './types';
import TreeItem from './TreeItem.vue';

defineProps<{ trees: Menu[] }>();
const emit = defineEmits(['change-active']);

const handleClick = (item: Menu) => {
    emit('change-active', item);
};
</script>

<template>
    <li v-for="tree of trees">
        <TreeItem :tree="tree" @change-active="handleClick"></TreeItem>
    </li>
</template>
