/**
 * @name 入力必須
 * @return 〇〇は必須項目です。
 */
export const REQUIRED_MESSAGE = (name: string) => {
  return `${name}は必須項目です`;
};

/**
 * @name 最大桁数
 * @return 〇〇は〇〇桁以下の数値で入力してください
 */
export const MAX_NUMBER_LENGTH_MESSAGE = (name: string, max: number) => {
  return `${name}は${max}桁以下の数値で入力してください`;
};
