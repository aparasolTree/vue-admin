<script setup lang="ts">
import { userLogin } from '@/api/userApi';
import { store } from '@/utils';
import v from '@/plugins/validate';
import { useRouter } from 'vue-router';
const { Form, Field, ErrorMessage } = v;

interface LoginInfo {
    account: string;
    password: string;
}
const router = useRouter();
const onSubmit = async (values: LoginInfo) => {
    const {
        result: { token },
    } = await userLogin(values);
    store.set('token', { token });
    router.push({ name: 'home' });
};
</script>

<template>
    <div class="overflow-hidden bg-white shadow-xl -translate-y-44 md:translate-y-0 rounded-xl">
        <Form class="text-2xl p-9" @submit="(v: LoginInfo) => onSubmit(v)">
            <h2 class="mb-5 text-center">后台登录</h2>
            <div>
                <Field
                    name="account"
                    class="base-input"
                    :rules="{ required: true, email: true }"
                    label="账号"
                    value="admin@qq.com"
                ></Field>
                <ErrorMessage name="account" as="div" class="base-error" />
                <Field
                    name="password"
                    type="password"
                    class="base-input"
                    label="密码"
                    value="admin123"
                    :rules="{ required: true, min: 6 }"
                ></Field>
                <ErrorMessage name="password" as="div" class="base-error" />
            </div>
            <div class="flex justify-between px-2 mt-5 text-xs">
                <RouterLink to="/auth/register" class="hover:underline">注册账号</RouterLink>
                <RouterLink to="/" class="hover:underline"> 忘记密码？ </RouterLink>
            </div>
            <div>
                <BaseButton>登录</BaseButton>
            </div>
        </Form>
    </div>
</template>

<style scoped></style>

<script lang="ts">
export default {
    route: {
        meta: {
            guest: true,
        },
    },
};
</script>
