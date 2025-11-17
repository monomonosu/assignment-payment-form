import z from "zod";
import {
  MAX_NUMBER_LENGTH_MESSAGE,
  REQUIRED_MESSAGE,
} from "@/utils/validation/message";

/**
 * @name 入力必須
 * @param {string} name
 * @description 〇〇は必須項目です。
 */
export const requiredString = (name: string) => {
  return z.string().min(1, { message: REQUIRED_MESSAGE(name) });
};

/**
 * @name 最大桁数
 * @param {string} name
 * @param {number} max
 * @description 〇〇は〇〇桁以下の数値で入力してください
 */
export const maxNumberLengthSchema = (name: string, max: number) => {
  return z.string().refine(
    (val) => {
      const regex = new RegExp(`^\\d{1,${max}}$`);
      return regex.test(val);
    },
    {
      message: MAX_NUMBER_LENGTH_MESSAGE(name, max),
    },
  );
};
