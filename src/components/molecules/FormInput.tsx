import clsx from "clsx";

type Props = {
  label?: string;
  required?: boolean;
  children: React.ReactNode;
};

export const FormInput: React.FC<Props> = (props: Props) => {
  const { label, required, children } = props;

  return (
    <div>
      <div className={clsx("flex mb-1", !label && "mt-5")}>
        {label && (
          <label htmlFor="input" className="text-sm">
            {label}
          </label>
        )}

        {required && (
          <span className="ml-2 px-1 py-0.5 text-xs text-white bg-red-500 rounded-sm">
            必須
          </span>
        )}
      </div>
      {children}
    </div>
  );
};
