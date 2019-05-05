import VueI18n from "vue-i18n";
import en from "./en";

const numberFormats = {
  "en": {
    currency: {
      style: "currency",
      currency: "USD"
    }
  }
};

export function setupMessages() {
  return new VueI18n({
    locale: "en",
    messages: {
      en
    },
    numberFormats
  });
}
