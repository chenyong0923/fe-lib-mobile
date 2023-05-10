import type { NamePathType, Value } from './common';
import type { FormInstance } from './store';

function useWatch(namePath: NamePathType, form: FormInstance): Value;

export default useWatch;
