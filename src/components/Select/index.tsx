import { Control, Controller } from "react-hook-form";

import ReactSelect from "react-select";
import { customStyles } from "./style.config";
import { Container, Error } from "./styles";

type SelectProps = {
  values: Array<any>;
  name: string;
  error?: string;
  control: Control<any>;
  defaultValue?: any
}

export function Select(
  {
    values,
    error,
    name,
    control,
    defaultValue,
  }: SelectProps
) {

  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <ReactSelect
            styles={customStyles}
            options={values}
            onChange={onChange}
            defaultValue={defaultValue}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: theme.colors.neutral50,
                primary: theme.colors.neutral40,
              },
            })}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

