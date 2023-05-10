import type { FormInstance } from './store';

function useForm<Values = any>(form?: FormInstance): [FormInstance<Values>];

export default useForm;
