<script setup lang='ts'>
import { userInfo, userLogin } from '@/api/userApi';
// const { data } = await userInfo()
const { result } = await userLogin()
console.log(result);

</script>

<template>
    <div class="bg-orange-600">home.vue</div>
</template>