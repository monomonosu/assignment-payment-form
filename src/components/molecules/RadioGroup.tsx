import { Radio } from "@/components/atoms/Radio";
import { GapWrapper } from "@/styles/components/wrappers";
import type { OptionProps } from "@/utils/common";

type Props = {
  options: OptionProps[];
};

export const RadioGroup: React.FC<Props> = ({ options }) => {
  return (
    <GapWrapper direction="column" gap={8}>
      {options.map((option) => (
        <Radio
          key={option.value}
          id={option.value}
          name="radio-group"
          label={option.label}
          value={option.value}
        />
      ))}
    </GapWrapper>
  );
};
