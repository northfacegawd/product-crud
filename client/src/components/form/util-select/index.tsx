import { useMemo } from 'react';
import { FormSelectProps } from 'semantic-ui-react';

import useUtil, { UtilType } from '../../../hooks/request/get/useUtil';
import Select from '../select';

interface BrandSelectProps extends Omit<FormSelectProps, 'options'> {
  type: UtilType;
}

export default function UtilSelect({ type, ...rest }: BrandSelectProps) {
  const { data, isLoading } = useUtil(type);

  const options = useMemo(() => {
    if (!data) return [];
    return data.map((util) => ({
      key: util.id,
      text: util.name,
      value: util.slug,
    }));
  }, [data]);

  return <Select loading={isLoading} options={options} {...rest} />;
}
