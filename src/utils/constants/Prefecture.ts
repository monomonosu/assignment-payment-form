export class Prefecture {
  static readonly HOKKAIDO = "01";
  static readonly AOMORI = "02";
  static readonly IWATE = "03";
  static readonly MIYAGI = "04";
  static readonly AKITA = "05";
  static readonly YAMAGATA = "06";
  static readonly FUKUSHIMA = "07";
  static readonly IBARAKI = "08";
  static readonly TOCHIGI = "09";
  static readonly GUNMA = "10";
  static readonly SAITAMA = "11";
  static readonly CHIBA = "12";
  static readonly TOKYO = "13";
  static readonly KANAGAWA = "14";
  static readonly NIIGATA = "15";
  static readonly TOYAMA = "16";
  static readonly ISHIKAWA = "17";
  static readonly FUKUI = "18";
  static readonly YAMANASHI = "19";
  static readonly NAGANO = "20";
  static readonly GIFU = "21";
  static readonly SHIZUOKA = "22";
  static readonly AICHI = "23";
  static readonly MIE = "24";
  static readonly SHIGA = "25";
  static readonly KYOTO = "26";
  static readonly OSAKA = "27";
  static readonly HYOGO = "28";
  static readonly NARA = "29";
  static readonly WAKAYAMA = "30";
  static readonly TOTTORI = "31";
  static readonly SHIMANE = "32";
  static readonly OKAYAMA = "33";
  static readonly HIROSHIMA = "34";
  static readonly YAMAGUCHI = "35";
  static readonly TOKUSHIMA = "36";
  static readonly KAGAWA = "37";
  static readonly EHIME = "38";
  static readonly KOCHI = "39";
  static readonly FUKUOKA = "40";
  static readonly SAGA = "41";
  static readonly NAGASAKI = "42";
  static readonly KUMAMOTO = "43";
  static readonly OITA = "44";
  static readonly MIYAZAKI = "45";
  static readonly KAGOSHIMA = "46";
  static readonly OKINAWA = "47";

  static getText(value: string) {
    switch (value) {
      case Prefecture.HOKKAIDO:
        return "北海道";
      case Prefecture.AOMORI:
        return "青森県";
      case Prefecture.IWATE:
        return "岩手県";
      case Prefecture.MIYAGI:
        return "宮城県";
      case Prefecture.AKITA:
        return "秋田県";
      case Prefecture.YAMAGATA:
        return "山形県";
      case Prefecture.FUKUSHIMA:
        return "福島県";
      case Prefecture.IBARAKI:
        return "茨城県";
      case Prefecture.TOCHIGI:
        return "栃木県";
      case Prefecture.GUNMA:
        return "群馬県";
      case Prefecture.SAITAMA:
        return "埼玉県";
      case Prefecture.CHIBA:
        return "千葉県";
      case Prefecture.TOKYO:
        return "東京都";
      case Prefecture.KANAGAWA:
        return "神奈川県";
      case Prefecture.NIIGATA:
        return "新潟県";
      case Prefecture.TOYAMA:
        return "富山県";
      case Prefecture.ISHIKAWA:
        return "石川県";
      case Prefecture.FUKUI:
        return "福井県";
      case Prefecture.YAMANASHI:
        return "山梨県";
      case Prefecture.NAGANO:
        return "長野県";
      case Prefecture.GIFU:
        return "岐阜県";
      case Prefecture.SHIZUOKA:
        return "静岡県";
      case Prefecture.AICHI:
        return "愛知県";
      case Prefecture.MIE:
        return "三重県";
      case Prefecture.SHIGA:
        return "滋賀県";
      case Prefecture.KYOTO:
        return "京都府";
      case Prefecture.OSAKA:
        return "大阪府";
      case Prefecture.HYOGO:
        return "兵庫県";
      case Prefecture.NARA:
        return "奈良県";
      case Prefecture.WAKAYAMA:
        return "和歌山県";
      case Prefecture.TOTTORI:
        return "鳥取県";
      case Prefecture.SHIMANE:
        return "島根県";
      case Prefecture.OKAYAMA:
        return "岡山県";
      case Prefecture.HIROSHIMA:
        return "広島県";
      case Prefecture.YAMAGUCHI:
        return "山口県";
      case Prefecture.TOKUSHIMA:
        return "徳島県";
      case Prefecture.KAGAWA:
        return "香川県";
      case Prefecture.EHIME:
        return "愛媛県";
      case Prefecture.KOCHI:
        return "高知県";
      case Prefecture.FUKUOKA:
        return "福岡県";
      case Prefecture.SAGA:
        return "佐賀県";
      case Prefecture.NAGASAKI:
        return "長崎県";
      case Prefecture.KUMAMOTO:
        return "熊本県";
      case Prefecture.OITA:
        return "大分県";
      case Prefecture.MIYAZAKI:
        return "宮崎県";
      case Prefecture.KAGOSHIMA:
        return "鹿児島県";
      case Prefecture.OKINAWA:
        return "沖縄県";
      default:
        return "";
    }
  }

  //   static readonly MALE = 1 // 男性

  //   static readonly FEMALE = 2 // 女性

  //   static getText(value: number) {
  //     switch (value) {
  //       case this.MALE:
  //         return '男性'
  //       case this.FEMALE:
  //         return '女性'
  //       default:
  //         return ''
  //     }
  //   }
}
