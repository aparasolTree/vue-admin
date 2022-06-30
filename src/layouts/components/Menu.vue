<script setup lang="ts">
import Tree, { Menu } from '@/components/Tree';
import { ref } from 'vue';

const menus = ref<Menu[]>([
    {
        title: '错误页面',
        icon: 'fas fa-bomb',
        isOpen: true,
        children: [
            { title: '404 页面', active: true },
            { title: '403 页面' },
            { title: '505 页面' },
        ],
    },
    {
        title: '编辑器',
        icon: 'fas fa-paragraph',
        children: [{ title: 'markdown 编辑器' }, { title: '富文本编辑器' }],
    },
]);

type MenuKeys = keyof Menu;
const resetMenus = (menu: Menu[], prop: MenuKeys) => {
    menu.forEach((m: Menu) => {
        // @ts-ignore
        m[prop] = false;
        if (m.children && m.children.length) {
            resetMenus(m.children, prop);
        }
    });
};

const handleChangeActive = (item: Menu) => {
    // resetMenus(menus.value, 'active');
    // item.active = true;
};
const handleOpen = (item: Menu) => {
    resetMenus(menus.value, 'isOpen');
    item.isOpen = true;
};
</script>

<template>
    <ul class="text-white">
        <Tree :tree="menus" @change-active="handleChangeActive" @toggle-open="handleOpen"></Tree>
    </ul>
</template>
