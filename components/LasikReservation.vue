<template>
  <div class="lasik-reservation">
    <h4>預約檢查</h4>
    <h5>
      大學眼科提醒您<span>，</span>並非所有人都適合近視雷射建議進行詳細的檢查<span>，</span>並與諮詢員或醫療專業人員討論<span>。</span>
    </h5>
    <h6><span>*</span>為必填項目</h6>
    <div class="form">
      <input v-model="name" v-bind="nameProps" type="text" placeholder="*姓名" :class="{ 'unfilled': errors.name }">
      <select v-model="clinic" v-bind="clinicProps"
        :class="[{ 'unselect': clinic === '' }, { 'unfilled': errors.clinic }]">
        <option value="" disabled selected>
          *選擇診所
        </option>
        <option v-for="clinic in clinicData.responseData" :key="clinic.uid" :value="clinic.clinicName2">
          {{ clinic.addressTitle }}
        </option>
      </select>
      <input v-model="phone" v-bind="phoneProps" type="tel" placeholder="*連絡電話" :class="{ 'unfilled': errors.phone }">
      <select v-model="timeSlots" v-bind="timeSlotsProps" :class="{ 'unselect': timeSlots === '' }">
        <option value="" selected disabled>
          可連絡的時段
        </option>
        <option value="任何時段">
          任何時段
        </option>
        <option value="上午">
          上午
        </option>
        <option value="下午">
          下午
        </option>
        <option value="晚上">
          晚上
        </option>
      </select>
      <textarea v-model="complementaryText" v-bind="complementaryTextProps" placeholder="補充說明" />
      <p class="reCAPTCHA-statement">
        This site is protected by reCAPTCHA and the Google
        <NuxtLink to="https://policies.google.com/privacy">
          Privacy Policy
        </NuxtLink>
        and
        <NuxtLink to="https://policies.google.com/terms">
          Terms of Service
        </NuxtLink>
        apply.
      </p>
      <div class="privacy">
        <input v-model="privacy" v-bind="privacyProps" type="checkbox" id="privacy-agree">
        <label for="privacy-agree">
          <span class="space" />我同意
          <span class="brackets-l">「</span>大學光學科技股份有限公司及其關係企業與合作診所<span class="brackets-r">」</span>使用本人之個人資料
          <span class="comma">，</span>做為預約資訊之提供<span class="comma-2">、</span>提升服務品質及客戶關懷使用<span class="comma-2">。</span>
        </label>
        <span class="privacy-link" @click="privacyModalShow = true">隱私權保護政策</span>
        <br>
        <span style="color: #fff;">{{ errors.privacy }}</span>
      </div>

      <button class="reservation-btn" @click="reservation">
        確認並預約
      </button>
    </div>
    <ul class="notify">
      <li>
        <span class="disc">˙</span>預約完成後<span class="comma">，</span>將由諮詢專員於
        <span class="publicSans">1~2</span>個工作天內電話與您聯繫<span class="comma">。</span>
      </li>
      <li class="important">
        <span class="disc">˙</span>預約諮詢時間以諮詢專員電話聯繫為主<span class="comma">。</span>
      </li>
      <li>
        <span class="disc">˙</span>欲預約3天內的諮詢檢查<span class="comma">，</span>建議電話洽詢
        <span class="publicSans">(0800- 74- 74- 88)</span><span class="comma">。</span>
      </li>
    </ul>
    <div v-show="privacyModalShow" class="modal-bg">
      <div class="privacy-modal">
        <div class="modal-close">
          <h6>隱私權保護政策</h6>
          <img src="~/assets/images/public/icon/modal-close.png" alt="" @click="privacyModalShow = false">
        </div>
        <p>
          大學眼科(以下簡稱「本診所」)非常重視使用者的隱私權，因此制訂了大學眼科隱私權保護政策(以下簡稱「隱私權政策」)，並遵守我國相關法律(包括但不限於電腦處理個人資料保護法等)之規範。請您詳細閱讀以下「隱私權政策」之內容，這份文件將讓您更加瞭解當您拜訪本診所所經營之網站(https://www.eyedoctor.com.tw/，以下簡稱「本站」)時，我們在蒐集、處理您個人資訊方面的做法、您應享有哪些權利，以及您擁有哪些選擇以更進一步保護個人的隱私權，我們提供以下各項說明來告訴您我們的相關做法。<br>
          若您不同意我們的做法，請暫時不要參與本站上的活動。當然您也可以告訴我們您的想法，若有任何意見或疑問，請利用客服專區回報系統提出您的疑議。<br>
          本診所的隱私權政策所包含的內容如下
        </p>
        <ul>
          <li>一、隱私權政策之修訂</li>
          <li>二、個人資料之搜集與運用</li>
          <li>三、個人資料之修改</li>
          <li>四、個人資料提供予第三者及共有</li>
          <li>五、Cookie</li>
          <li>六、自我保護措施</li>
          <li>七、資訊安全保護措施</li>
          <li>八、個人資料管理責任者</li>
        </ul>
        <h6>
          一、隱私權政策之修訂
        </h6>
        <p>
          本隱私權政策自西元2012年9月30日起開始使用。然而，本診所有權依我國相關法律(包括但不限於個人資料保護法等)之修訂或本診所內部方針之變更，隨時修改或變更隱私權政策之內容。隱私權政策一旦發生變動，本診所將於本站上公佈修改內容，並以醒目標示提醒您前往點選閱讀，而不另對會員進行個別通知。
          <br>
          建議您隨時注意該等修改或變更，以保障您自身的權益，如果您不同意修改的內容，請勿繼續使用本診所所提供的所有服務。當您於隱私權政策任何修改或變更後繼續使用本診所之服務，表示您已閱讀、瞭解並同意接受隱私權政策修改或變更後之內容。
        </p>
        <h6>二、隱私權政策適用範圍</h6>
        <p>
          隱私權政策內容適用在本診所如何處理在您使用本站服務時收集到的身份識別資料，也適用在本診所如何處理在商業伙伴與本站合作時分享的任何身份識別資料。
          <br>
          隱私權保護政策不適用於本診所以外的公司及網站。同時您也必須了解：瀏覽本站服務時，在某些情形下，您可能會需要使用網頁超連結功能，例如當您使用某項由第三者所提供的內容服務，或閱讀某則本站所提供的資訊，而該項資訊包括其他網頁的連結功能時。本診所無法繼續提供您連結至他站後的隱私權保護。
          <br>
          故當您離開本站進入他站時，請別忘了先閱讀該網站所提供的隱私權條款，再決定是否繼續接受該網站的服務。
        </p>
        <h6>三、個人資料之搜集與運用</h6>
        <p>本診所主要搜集您個人資料之項目及使用目的如下：</p>
        <ul>
          <li>
            1.姓名、出生年月日：您使用本診所服務時之識別、年齡之確認、重複申請本診所服務時之確認、您個人資料遺失或變更時之識別。</li>
          <li>
            2.E-mail：傳達本診所之公告事項、與您意見溝通及傳遞本診所之資訊、商業性資料或電子郵件給您。本診所除了在該資料或電子郵件上註明是由本站發送，也會在該資料或電子郵件上提供您能隨時停止接收這些資料或電子郵件的方法、說明或功能連結。為了提供您其他服務或優惠權益需要與提供該服務或優惠的第三者傳送商業性資料或電子郵件時，本診所將會在活動時提供充分的說明，並且在第三者傳輸之前通知您，您可以自由選擇是否接受這項特定服務或活動。
          </li>
          <li>
            3.其他項目：為提供本診所服務所必須，或為新增行銷資料及用戶別指南及廣告的傳輸或是寄送。
          </li>
          <li>
            4.線上活動及網路調查：當您參與線上活動或網路調查時，本診所會請您提供姓名、身份證字號、電話、e-mail及住址等。所蒐集的姓名、身份證字號，僅供抽獎活動依據；電話、e-mail及住址等資訊，則作為通知抽獎結果及分析之用，並不做其他用途。其他資料僅止於商業及市場分析或學術用途；除非受訪者同意，所有資料僅供資料分析之用，本診所不會將資訊用做其他用途。
            <br>
            另外，您所輸入的資料，僅供本診所提供服務或活動設計參考使用。凡未經您主動提供的資料，例如使用者機器的 IP
            位址、使用時間、使用的流覽器、流覽及點選紀錄等資料，本診所僅對全體使用者行為總和進行分析，並不會對個別使用者進行分析。
          </li>
        </ul>
        <h6>四、個人資料之修改</h6>
        <p>
          您可以書面、電話、E-mail或傳真之方式，向本站之「個人資料管理責任者」提出查詢、修正、停止蒐集利用及刪除之要求，「個人資料管理責任者」會為您處理相關事宜。
        </p>
        <h6>五、個人資料提供予第三者及共有之政策</h6>
        <p>
          除經過您的同意、本隱私權政策或相關法令規定外，本診所絕不會任意出售、交換、或出租任何您的個人資料給其他團體或個人。但有下列之情形時，本診所得提供第三者或與第三者共用您的個人資料：
        </p>
        <ul>
          <li>
            1.為了提供您其他服務或優惠權益，需要與提供該服務或優惠之第三者共用您的資料時，本診所會在活動時提供充分說明，您可以自由選擇是否接受這項特定服務或優惠，若您不願意接受，請通知本診所。
          </li>
          <li>
            2.為完成統計資料、學術研究或市場調查之必要情況時。
          </li>
          <li>
            3.於政府機關或司法單位因公眾安全或法令之規定，要求本診所公開特定個人資料時，本診所將依該單位之合法程序(包括但不限於公文之要求等)為必要的配合。
          </li>
          <li>
            4.當您有違反本站服務條款，或有損害或妨礙本站使用者或相關第三人權益之虞時，若本診所認為揭露您的個人資料係為辨識、連絡或對您採取法律行動所必要者，本診所得揭露您個人資料。此外，若本診所認為揭露為法律之需要，或為維護和改進本診所之服務而用於管理或其他目的時，本診所亦得揭露或讀取您的個人資料。
          </li>
        </ul>
        <h6>六、Cookie</h6>
        <p>
          所謂Cookie就是在瀏覽網站時，使用的伺服器(HTTP)從使用者的瀏覽器中發出非常小的text做為檔案，也可以儲存在使用者的電腦硬碟。本診所將隨時儲存使用者的資料和運作，尋找出Cookie。但您能夠在網路瀏覽器中選擇瀏覽器對Cookie的接受程度，包括「接受所有Cookie」、
          「出現Cookie時加以通知」、「拒絕所有 Cookie」等三種。但如您選擇瀏覽器拒絕所有Cookie時，您使用本診所之服務將會變的困難。
          <br>
          本診所亦會於下列情形及目的下，於您使用的瀏覽器中寫入並讀取Cookie：
        </p>
        <ul>
          <li>
            1.在使用者環境設定等，也使用Cookie。放在個人所直接儲存選擇的檢索使用環境值，為了使用者必須做的環境設定，使用這項資料。
          </li>
          <li>
            2.會員和非會員的連接頻率的差異或是反覆使用程度等，處理有關使用者的使用行動資料後，可以提供最佳化的資料。
          </li>
        </ul>
        <h6>七、自我保護措施</h6>
        <p>
          請妥善保管您的密碼及或任何個人資訊，不要將任何個人資訊，尤其是密碼提供給任何人。在您欲離開電腦前或不再使用本站的服務時，務必記得關掉會員帳號，若您是與他人共用電腦或使用公共電腦，切記要關閉流覽器視窗，以防止他人讀取您的個人資料。
        </p>
        <h6>八、資訊安全保護措施</h6>
        <p>
          本診所為保護使用者之個人資料安全，所做之技術性和管理性措施如下：
        </p>
        <ul>
          <li>
            1.收集的個人資料中，針對認證密碼等本人的資料進行加密的設置。
          </li>
          <li>
            2.在電腦病毒防治，為了阻擋個人資料的侵害，進行軟體設置、更新、檢查設置。
          </li>
          <li>
            3.針對個人資料系統，包含接近權限的設定，管理及阻斷侵入系統等，使用相關設計及裝置。
          </li>
          <li>
            4.針對個人資料管理人員，指派和權限的設定及教育，個人資料安全的管理。
          </li>
        </ul>
        <h6>九、個人資料管理責任者</h6>
        <p>
          本診所為聽取使用者的意見和處理使用者之不滿，及為保護使用者的個人資料及處理有關個人資料之爭議，因此特別設置聯絡窗口 - 「個人資料管理責任者」
          <br>
          傳真：02-2655-7890<br>
          e-mail： service@eyedoctor.com.tw<br>
          若您對於本隱私權政策有任何疑問，請與個人資料管理責任者聯絡。
        </p>
      </div>
    </div>

    <div v-show="reservationOkModalShow" class="modal-bg">
      <div class="reservation-ok-modal">
        <img src="~/assets/images/public/icon/modal-close.png" alt="" class="modal-close" @click="reservationOkModalShow = false">
        <img src="~/assets/images/public/icon/reservation-ok.webp" alt="" class="ok-img">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3';
import { useForm } from 'vee-validate';
const recaptchaInstance = useReCaptcha();
const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;
const JWTToken = useJWTTokenStore();
const { $isJWTTokenValid } = useNuxtApp();

const { data: clinicData } = useFetch("/ClinicReservation/ReservationClinicList_forLasiks/lasik",
  {
    method: "POST",
    lazy: true,
    server: false,
    default: () => { return [] },
    headers: {
      Authorization: `Bearer ${JWTToken.JWTToken}`,
    },
    baseURL: apiBaseUrl,

    onRequestError({ error }) {
      // 處理請求時發生的錯誤
      alert(`錯誤階段 : onRequestError \n${error}`)
    },
    onResponse({ request, response, options }) {
      // 處理請求回應的資料
      if (!response._data.isSuccess) {
        alert("response._data.message");
      }
    },
    onResponseError({ response }) {
      // 處理請求回應發生的錯誤                                        
      alert(`錯誤階段 : onResponseError \n錯誤api:${response.url} \nstatus:${response.status} \ntype:${response.type}`);
    }
  })


const isName = (value) => {
  return value !== "" || '請輸入姓名';
}
const isClinic = (value) => {
  return value !== "" || '請選擇一個';
}
const isPhone = (value) => {
  const phoneRegex = /^09\d{8}$/;
  return phoneRegex.test(value) || '無效的電話號碼';
}
const isPrivacy = (value) => {
  return value || '請勾選';
}
//預約驗證
const { defineField, handleSubmit, resetForm, errors } = useForm({
  initialValues: {
    name: "",
    clinic: "",
    phone: "",
    timeSlots: "",
    complementaryText: "",
    privacy: false
  },
  validationSchema: {
    name: isName,
    clinic: isClinic,
    phone: isPhone,
    timeSlots: undefined,
    complementaryText: undefined,
    privacy: isPrivacy
  },
});
const [name, nameProps] = defineField('name');
const [clinic, clinicProps] = defineField('clinic');
const [phone, phoneProps] = defineField('phone');
const [timeSlots, timeSlotsProps] = defineField('timeSlots');
const [complementaryText, complementaryTextProps] = defineField('complementaryText');
const [privacy, privacyProps] = defineField('privacy');
// 

const reservation = handleSubmit(async inputData => {
  // Submit to API
  console.log(inputData);

  const currentDate = new Date();
  const route = useRoute();

  //判斷token是否過期
  await $isJWTTokenValid();
  //recaptcha v3認證
  await recaptchaInstance?.recaptchaLoaded();
  const recaptchaToken = await recaptchaInstance?.executeRecaptcha('Reservation');
  const verifyResponse = await $fetch("/API_VerifyBot/Verifying", {
    method: "POST",
    body: {
      token: recaptchaToken,
    },
    headers: {
      Authorization: `Bearer ${JWTToken.JWTToken}`,
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
  if (!verifyResponse.isSuccess) {
    alert(verifyResponse.message)
    return
  }
  if (verifyResponse.responseData.score < 0.6) {
    alert("您可能為機器人，請重新執行操作");
    return
  }

  const reservationResponse = await $fetch("/ClinicReservation/Reservation_forLasiks/lasik", {
    method: "POST",
    body: {
      isDevTest: process.env.NODE_ENV === 'development' ? true : false,
      u_name: inputData.name,
      u_tel: inputData.phone,
      m_callTimes: inputData.timeSlots ? [inputData.timeSlots] : null,
      u_h: inputData.clinic,
      m_textMSG: inputData.complementaryText,
      user_device: "mobile",
      m_submitDT: `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`,
      m_revFrom: route.fullPath,
      use_Personal_information: 1
    },
    headers: {
      Authorization: `Bearer ${JWTToken.JWTToken}`,
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
  if (!reservationResponse.isSuccess) {
    alert(reservationResponse.message);
    return
  }
  console.log(reservationResponse);
  reservationOkModalShow.value = true;
  resetForm();
});

const privacyModalShow = ref(false);
const reservationOkModalShow = ref(false);
</script>
<style scoped lang="scss">
.lasik-reservation {
  background-color: #000;
  height: 1069px;
  padding-top: 73px;

  h4 {
    color: #fff;
    text-align: center;
    margin-bottom: 7px;
    font-size: 32px;
    font-weight: 700;
  }

  h5 {
    color: #fff;
    line-height: 24px;
    font-weight: 500;
    padding-left: 21px;
    padding-right: 21px;
    margin-bottom: 22px;

    span {
      margin-left: -4px;
      margin-right: -4px;
    }
  }

  h6 {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding-left: 25px;
    margin-bottom: 17px;

    span {
      color: #cc0012;
    }
  }

  .form {
    padding-left: 22px;
    padding-right: 22px;

    input[type="text"],
    input[type="tel"],
    select {
      background-color: #fff;
      width: 100%;
      height: 42px;
      border-radius: 5px;
      border: none;
      margin-bottom: 18px;
      font-size: 16px;
      color: #000;
      font-family: "SourceHanSansTC";
      padding-left: 15px;
    }

    input[type="text"]::placeholder,
    input[type="tel"]::placeholder {
      color: #909090;
    }

    select {
      appearance: none;
      background-image: url("~/assets/images/public/icon/arrow-select.png");
      background-repeat: no-repeat;
      background-position: center right 13px;
      background-size: 14px;
    }

    select.unselect {
      color: #909090;
    }

    textarea {
      width: 100%;
      border-radius: 8px;
      height: 102px;
      resize: none;
      font-size: 16px;
      padding-top: 8px;
      padding-left: 15px;
      font-family: "SourceHanSansTC";
    }

    textarea::placeholder {
      color: #909090;
    }

    input[type="text"]:focus,
    input[type="tel"]:focus,
    select:focus,
    textarea:focus {
      outline: 2px solid #2981ff;
    }

    //定位
    input[type="text"].unfilled,
    input[type="tel"].unfilled,
    select.unfilled {
      outline: 2px solid #CD0012;
    }



    .reCAPTCHA-statement {
      margin-top: 29px;
      color: #fff;
      font-size: 12px;
    }

    input[type="checkbox"] {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 18px;
      height: 18px;
      margin: 0;
      appearance: none;
      background-color: #fff;
      border-radius: 2px;
    }

    input[type="checkbox"]::after {
      top: 0;
      position: absolute;
      display: inline-block;
      width: 18px;
      height: 18px;
      content: "";
    }

    input[type="checkbox"]:checked:after {
      content: "";
      background-image: url("~/assets/images/public/icon/checked-box.png");
      background-size: 100%;
    }

    .privacy {
      margin-top: 35px;
      margin-bottom: 37px;
      position: relative;
      padding-left: 4px;
      padding-right: 4px;
      font-size: 14px;

      label {
        color: #fff;
        line-height: 22px;

        .space {
          display: inline-block;
          width: 28px;
        }

        .brackets-l {
          margin-left: -10px;
        }

        .brackets-r {
          margin-right: -7px;
        }

        .comma {
          margin-left: -7px;
          margin-right: -3px;
        }

        .comma-2 {
          margin-left: -3px;
          margin-right: -4px;
        }
      }

      .privacy-link {
        color: #009ce1;
        text-decoration: underline;

      }
    }

    .reservation-btn {
      display: block;
      border: none;
      font-size: 17px;
      height: 48px;
      width: 168px;
      background-color: #009be0;
      color: #fff;
      border-radius: 5px;
      font-family: "SourceHanSansTC";
      margin-left: auto;
      margin-right: auto;
    }
  }

  .notify {
    border-top: 1px solid #c2c2c2;
    padding-top: 20px;
    margin-top: 40px;
    margin-left: 23px;
    margin-right: 23px;
    color: #fff;
    font-size: 14px;
  }

  li {
    line-height: 22px;
    position: relative;
    padding-left: 1px;

    .disc {
      position: absolute;
      top: -5px;
      left: -9px;
      font-size: 12px;
    }

    .comma {
      margin-left: -4px;
      margin-right: -3px;
    }

    .publicSans {
      font-family: "PublicSans";
      font-weight: 300;
    }
  }

  .important {
    color: #ffff00;
  }

  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 55px 26px;
    backdrop-filter: blur(20px);
    background-color: rgba(45, 45, 45, 0.7);
    z-index: 2;

    .privacy-modal {
      background-color: #000;
      padding: 0px 16px 42px 16px;
      height: 100%;
      border-radius: 25px;
      text-align: start;
      overflow-y: scroll;
      color: #fff;

      h6 {
        padding: 0;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 16px;
      }

      .modal-close {
        position: sticky;
        z-index: 1;
        top: 0;
        padding-top: 21px;
        padding-right: 2px;
        display: flex;
        justify-content: space-between;
        background-color: #000;

        img {
          width: 36px;
          height: 36px;
        }
      }

      ul {
        margin-bottom: 16px;
      }

      p {
        line-height: 24px;
        margin-bottom: 16px;
      }
    }

    .reservation-ok-modal {
      background-color: #000;
      height: 100%;
      border-radius: 25px;
      position: relative;

      .modal-close {
        position: absolute;
        width: 36px;
        height: 36px;
        top: 21px;
        right: 18px;
      }

      .ok-img {
        width: 126px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>