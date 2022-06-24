<script setup lang='ts'>
import {  userLogin } from '@/api/userApi';
const { result } = await userLogin()
</script>

<template>
    <div class="bg-orange-600">home.vue</div>
</template>