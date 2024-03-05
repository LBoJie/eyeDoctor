export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('isJWTTokenValid', async () => {
        const JWTToken = useJWTTokenStore();
        const nowTime = Date.now();
        console.log(JWTToken.getTime);
        console.log((nowTime - JWTToken.getTime) / 86400000);
        if (!JWTToken.getTime || (nowTime - JWTToken.getTime) / 86400000 > 0.8) {
            await JWTToken.getJWTToken();
        }
    });
})