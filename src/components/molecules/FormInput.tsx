type Props = {
  label: string;
  children: React.ReactNode;
};

export const FormInput: React.FC<Props> = (props: Props) => {
  const { label, children } = props;

  return (
    <>
      <div>
        <label htmlFor="input" className="text-sm">
          {label}
        </label>
      </div>
      {children}
    </>
  );
};
