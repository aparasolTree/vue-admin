<script setup lang="ts">
import type { Menu } from './types';

defineProps<{ tree: Menu[] }>();
const emit = defineEmits(['change-active', 'toggle-open']);
const handleClick = (item: Menu) => {
    if (item.children?.length) {
        emit('toggle-open', item);
    } else {
        emit('change-active', item);
    }
};
</script>

<template>
    <li v-for="item of tree">
        <div :class="[{ active: item.active }, 'title']" @click="handleClick(item)">
            <span> <i v-if="item.icon" :class="[item.icon, 'mr-2']"></i> {{ item.title }}</span>
            <i
                v-show="item.children && item.children.length"
                :class="item.isOpen ? 'fas fa-angle-down' : 'fas fa-angle-up'"
            ></i>
        </div>
        <ul v-show="item.isOpen" v-if="item.children && item.children.length" class="px-4">
            <Tree
                :tree="item.children"
                @change-active="handleClick"
                @toggle-open="handleClick"
            ></Tree>
        </ul>
    </li>
</template>

<style lang="scss" scoped>
li {
    .title {
        @apply flex items-center justify-between px-2 py-2 duration-100 rounded-md cursor-pointer hover:bg-slate-500;
        &.active {
            @apply bg-sky-600;
        }
    }
}
</style>
