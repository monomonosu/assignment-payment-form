import type { UseFormReturn } from "react-hook-form";
import { usePaymentForm } from "@/app/components/PaymentForm/usePaymentForm";
import type { PaymentFormType } from "@/app/schema";
import { Button } from "@/components/atoms/Button";
import { CautionBlock } from "@/components/atoms/CautionBlock";
import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { Select } from "@/components/atoms/Select";
import TextInput from "@/components/atoms/TextInput";
import { FormInput } from "@/components/molecules/FormInput";
import { RadioGroup } from "@/components/molecules/RadioGroup";
import { CenterWrapper, GapWrapper } from "@/styles/components/wrappers";

type PaymentFormProps = {
  onSubmit: (data: PaymentFormType) => void;
  form: UseFormReturn<PaymentFormType>;
};

export const PaymentForm = ({ form, onSubmit }: PaymentFormProps) => {
  const { prefectures, payments } = usePaymentForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <>
      <h2 className="mt-8">配送先情報</h2>

      <div className="px-8 py-6 mt-6 border border-natural-gray02">
        <div className="mb-4">
          <CautionBlock>
            ※配送先住所に誤りがある場合は、住所不明のため配送不可となります。送付先ご住所・郵便番号に誤りがないか十分にご確認をお願いいたします。
          </CautionBlock>
        </div>

        <GapWrapper direction="column" gap={24}>
          <GapWrapper direction="row" gap={16}>
            <div className="w-full">
              <FormInput label="氏名" required>
                <TextInput
                  id="name"
                  placeholder="姓"
                  {...register("first_name")}
                  error={"first_name" in errors}
                />
                <ErrorMessage message={errors.first_name?.message} />
              </FormInput>
            </div>

            <div className=" w-full relative">
              <FormInput>
                <TextInput
                  id="name"
                  placeholder="名"
                  {...register("last_name")}
                  error={"last_name" in errors}
                />
              </FormInput>
              <ErrorMessage message={errors.last_name?.message} />
            </div>
          </GapWrapper>

          <div className="w-32">
            <FormInput label="電話番号" required>
              <TextInput
                id="phone_number"
                placeholder="08012345678"
                {...register("phone_number")}
                error={"phone_number" in errors}
              />
              <ErrorMessage
                className="w-xs"
                message={errors.phone_number?.message}
              />
            </FormInput>
          </div>

          <div className="w-24">
            <FormInput label="郵便番号" required>
              <TextInput
                id="post_number"
                placeholder="0000000"
                {...register("post_number")}
                error={"post_number" in errors}
              />
              <ErrorMessage
                className="w-xs"
                message={errors.post_number?.message}
              />
            </FormInput>
          </div>

          <div className="w-32">
            <FormInput label="都道府県" required>
              <Select
                options={prefectures}
                placeholder="東京都"
                {...register("prefecture")}
                error={"prefecture" in errors}
              />
              <ErrorMessage
                className="w-xs"
                message={errors.prefecture?.message}
              />
            </FormInput>
          </div>

          <FormInput label="市区町村" required>
            <TextInput
              id="city"
              placeholder="渋谷区神南"
              {...register("city")}
              error={"city" in errors}
            />
            <ErrorMessage message={errors.city?.message} />
          </FormInput>

          <FormInput label="番地" required>
            <TextInput
              id="address"
              placeholder="1-1-1"
              {...register("address")}
              error={"address" in errors}
            />
            <ErrorMessage message={errors.address?.message} />
          </FormInput>

          <FormInput label="建物名・部屋番号">
            <TextInput
              id="address_line2"
              placeholder="渋谷マンション101号室"
              {...register("building")}
              error={"address_line2" in errors}
            />
            <ErrorMessage message={errors.building?.message} />
          </FormInput>
        </GapWrapper>
      </div>

      <h2 className="mt-8">お支払い方法</h2>

      <div className="mt-6 mb-8">
        <RadioGroup
          options={payments}
          register={register("payment_type")}
          error={"payment_type" in errors}
        />
        <ErrorMessage message={errors.payment_type?.message} />
      </div>

      <CenterWrapper>
        <GapWrapper direction="column" gap={16}>
          <Button onClick={handleSubmit(onSubmit)}>次へ進む</Button>
          <Button type="button" variants="outlined" onClick={() => {}}>
            戻る
          </Button>
        </GapWrapper>
      </CenterWrapper>
    </>
  );
};
