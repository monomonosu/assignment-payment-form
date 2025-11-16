import type { UseFormRegisterReturn } from "react-hook-form";
import { Radio } from "@/components/atoms/Radio";
import { GapWrapper } from "@/styles/components/wrappers";
import type { OptionProps } from "@/utils/common";

type Props = {
  options: OptionProps[];
  register: UseFormRegisterReturn;
  error?: boolean;
};

export const RadioGroup: React.FC<Props> = ({ options, register, error }) => {
  return (
    <GapWrapper direction="column" gap={8}>
      {options.map((option) => (
        <Radio
          key={option.value}
          id={register.name}
          label={option.label}
          value={option.value}
          register={register}
          error={error}
        />
      ))}
    </GapWrapper>
  );
};
