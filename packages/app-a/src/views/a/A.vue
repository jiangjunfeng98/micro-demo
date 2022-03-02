<template>
  <div>
    <p>A</p>
    <el-form ref="dFormRef" :inline="true" :model="params" :rules="rules">
      <el-form-item label="name" prop="name">
        <el-input v-model="params.name" placeholder="Name" />
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="params.address" placeholder="Address" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180">
        <template #default="scope">
          <el-button type="text" @click="handleClick(scope.row.name)">{{ scope.row.name }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import useForm from './useForm';

const { dFormRef, params, rules, tableData, onSubmit, handleClick } = useForm();

</script>

<script lang="ts">
export default {
  name: 'A'
};
</script>
