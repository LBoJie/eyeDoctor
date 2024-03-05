import { defineStore } from 'pinia';
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1;
const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
export const useJWTTokenStore = defineStore('JWTToken', {
    state: () => ({
        JWTToken: null,
        getTime: null
    }),
    actions: {
        async getJWTToken() {
            const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;
            const response = await $fetch("/Auth/WebUserAuth", {
                method: "POST",
                body: {
                    act: `EyeDoctorWeb${day}`,
                    pwd: `EyeDoctorWeb1992${month}${day}${year}`,
                    userId: "visitor"
                },
                baseURL: apiBaseUrl,
                onRequestError({ error }) {
                    // 處理請求時發生的錯誤
                    alert(`錯誤階段 : onRequestError \n${error}`)

                },
                onResponseError({ response }) {
                    // 處理請求回應發生的錯誤                                        
                    alert(`錯誤階段 : onResponseError \n錯誤api:${response.url} \nstatus:${response.status} \ntype:${response.type}`);
                }
            }
            );
            console.log("api 正常執行完成");
            console.log(response);
            if (!response.isSuccess) {
                console.log(response.message);
                alert(response.message);
            }
            this.getTime = Date.now();
            this.JWTToken = response.responseData;
        },
    },
    persist: {
        storage: persistedState.sessionStorage
    }
})