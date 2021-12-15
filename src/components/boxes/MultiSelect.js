import React from "react";
import SelectMultiple from "react-select";
import { Controller } from "react-hook-form";

const Multiselect = ({ label, name, values = [], control }) => {
  const options = values.map((value) => ({
    label: value,
    value: value
  }));

  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <SelectMultiple
              options={options}
              placeholder={"Choose..."}
              isMulti={true}
              onChange={(options) =>
                onChange(options?.map((option) => option.value))
              }
              onBlur={onBlur}
              value={options.filter((option) => value?.includes(option.value))}
              defaultValue={options.filter((option) =>
                value?.includes(option.value)
              )}
            />
          );
        }}
      />
    </div>
  );
};

export default Multiselect;
