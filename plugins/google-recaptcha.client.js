import { VueReCaptcha } from 'vue-recaptcha-v3';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6LcNlTspAAAAAGTmRkjINfvk4zjFl6ykovr9uF5y',
        loaderOptions: {
            autoHideBadge: true,
        }
    });
});
