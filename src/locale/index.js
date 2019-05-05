import VueI18n from "vue-i18n";
import en from "./en";

export function setupMessages() {
  return new VueI18n({
    locale: "en",
    messages: {
      en
    }
  });
}
