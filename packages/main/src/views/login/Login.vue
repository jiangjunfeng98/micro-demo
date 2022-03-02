<template>
  <div class="login">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Login</span>
        </div>
      </template>
      <div>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px">
          <el-form-item label="Name" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="toLogin">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { ElForm } from 'element-plus';
import { useRouter } from 'vue-router';
import { setToken } from '@app/base-core';
import { loginApi } from '@/apis/user';

type FormInstance = InstanceType<typeof ElForm>;

const rules = {
  name: [{
    required: true,
    message: 'Please input name',
    trigger: 'blur'
  }],
  password: [{
    required: true,
    message: 'Please input password',
    trigger: 'blur'
  }]
};

const router = useRouter();
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  name: '',
  password: ''
});

const toLogin = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.validate(async (valid) => {
    if (!valid) return;
    const res = await loginApi(ruleForm.name, ruleForm.password);
    if (!res.token) return;
    setToken(res.token);
    router.push({ name: 'Main' });
  });
};

</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

