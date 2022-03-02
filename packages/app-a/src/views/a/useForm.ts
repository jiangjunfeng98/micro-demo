import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { ElForm } from 'element-plus';
import { getDFromApi } from '@/apis';
import { IDFromVO } from '@/apis/type';

type FormInstance = InstanceType<typeof ElForm>;

const useForm = () => {
  const router = useRouter();

  const dFormRef = ref<FormInstance>();
  const params = reactive({
    name: '',
    address: ''
  });

  const rules = {
    name: [{
      required: true,
      message: 'Please input name',
      trigger: 'blur'
    }]
  };
  const tableData = ref<IDFromVO[]>([]);

  const onSubmit = async () => {
    if (!dFormRef.value) return;
    dFormRef.value.validate(async (valid) => {
      if (!valid) return;
      tableData.value = await getDFromApi(params);
    });
  };

  const handleClick = (id:string) => {
    router.push({ name: 'Info', query: { sign: id } });
  };

  return { dFormRef, params, rules, tableData, onSubmit, handleClick };
};

export default useForm;
