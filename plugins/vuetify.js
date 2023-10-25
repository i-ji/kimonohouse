import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    icons: {
      defaultSet: "mdi", // This is already the default value - only for display purposes
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
