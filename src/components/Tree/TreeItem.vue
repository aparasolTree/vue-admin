<script setup lang="ts">
import { ref } from 'vue';
import Tree from './Tree.vue';
import type { Menu } from './types';

defineProps<{ tree: Menu }>();
const emit = defineEmits(['change-active']);
const isOpen = ref(false);

const handleClick = (item: Menu) => {
    if (item.children?.length) {
        isOpen.value = !isOpen.value;
    } else {
        emit('change-active', item);
    }
};
</script>

<template>
    <div :class="[{ active: tree.active }, 'title']" @click.stop="handleClick(tree)">
        <span> <i v-if="tree.icon" :class="[tree.icon, 'mr-2']"></i> {{ tree.title }}</span>
        <i
            v-show="tree.children && tree.children.length"
            :class="isOpen ? 'fas fa-angle-down' : 'fas fa-angle-up'"
        ></i>
    </div>
    <ul v-show="isOpen" v-if="tree.children && tree.children.length" class="px-4">
        <Tree :trees="tree.children" @change-active="$emit('change-active', $event)"></Tree>
    </ul>
</template>

<style lang="scss" scoped>
.title {
    @apply flex items-center justify-between px-2 py-2 duration-100 rounded-md cursor-pointer hover:bg-slate-500;
    &.active {
        @apply bg-sky-600;
    }
}
</style>
