"use client";

import type { UseFormReturn } from "react-hook-form";
import { usePaymentModal } from "@/app/components/PaymentModal/usePaymentModal";
import type { PaymentFormType } from "@/app/schema";
import { Button } from "@/components/atoms/Button";
import { Modal } from "@/components/atoms/Modal";
import { ConfirmBlock } from "@/styles/components/block";
import { Text } from "@/styles/components/text";
import { CenterWrapper, GapWrapper } from "@/styles/components/wrappers";
import { Payment } from "@/utils/constants/Payment";
import { Prefecture } from "@/utils/constants/Prefecture";

type PaymentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  form: UseFormReturn<PaymentFormType>;
};

export const PaymentModal = (props: PaymentModalProps) => {
  const { isOpen, onClose, form } = props;

  const { getValues } = form;
  const { onConfirm, isSubmitting } = usePaymentModal(form, onClose);

  return (
    <Modal title="購入内容確認" isOpen={isOpen} onClose={onClose}>
      <h2>お支払い方法</h2>

      <div className="mt-6">
        <ConfirmBlock>
          <Text>{Payment.getText(getValues("payment_type"))}</Text>
        </ConfirmBlock>
      </div>

      <h2 className="mt-8">配送先</h2>

      <div className="mt-6">
        <ConfirmBlock>
          <Text isBold>
            {getValues("last_name")} {getValues("first_name")} 様
          </Text>
          {/* ４桁から始まる場合もあるのでキャストしていません */}
          <Text size={14}>{getValues("phone_number")}</Text>
          <Text size={14}>
            〒
            {`${getValues("post_number").slice(0, 3)}-${getValues("post_number").slice(3)}`}
          </Text>
          <Text size={14}>
            {Prefecture.getText(getValues("prefecture"))}
            {getValues("city")}
            {getValues("address")}
            {getValues("building")}
          </Text>
        </ConfirmBlock>
      </div>

      <CenterWrapper className="mt-6">
        <GapWrapper gap={12} direction="column">
          <Button onClick={onConfirm} disabled={isSubmitting}>
            {isSubmitting ? "送信中..." : "注文確定する"}
          </Button>
          <Button variants="outlined" onClick={onClose}>
            戻る
          </Button>
        </GapWrapper>
      </CenterWrapper>
    </Modal>
  );
};
