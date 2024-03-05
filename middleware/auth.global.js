export default defineNuxtRouteMiddleware(async (to, from) => {
    // 在client端判斷JWTtoken 是否過期
    if (process.client) {
        const { $isJWTTokenValid } = useNuxtApp();
        await $isJWTTokenValid();  
    }
})