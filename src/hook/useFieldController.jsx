import { useController } from 'react-hook-form';

export function useFieldController(fieldName, control, rules) {
  const fieldController = useController({
    name: fieldName,
    control,
    rules,
  });

  return fieldController;
}
