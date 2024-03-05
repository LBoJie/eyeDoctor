<template>
  <footer>
    <p class="footer-text-1">
      ◊ 醫療機構網際網路資訊管理辦法聲明:禁止任何網際網路服務業者轉錄本網路資訊之內容供人點閱，但以網路搜尋或超連結方式，進入本醫療機構之網址(域)直接點閱者，不在此限。
    </p>
    <p class="footer-text-1">
      ◊ 任何醫療處置均有其潛在風險，因此就診時，請務必與醫護人員配合，謝謝!<br>
      ※80萬門診人次指全台大學眼科聯盟每年統計量、22萬實例為全台大學眼科診所總計(一例為一眼)、美軍百萬實例統計單位為眼數、JCI證為Teipei,Taiwan、400+醫護係指全台大學眼科總計、38家眼科指二岸大學眼科聯盟合計<br>
      ※500萬例指全球SMIE全飛秒近視雷射眼數<br>
      ※SMILE、SMILEPro全飛秒單眼雷射時間依各角膜狀有所差異<br>
      ※周蕙、林日蘋、黃雅涵、邱立祥、林襄、曲羿、Yuri及陳大天於忠孝大學手術;陳威霖、邱立祥、莊雅容、劉冠麟及王中皇、潘慧如於站前大學眼科手術;王齋加、洪國磯及王家梁、田亞霍、蔡阿嘎、菲菲、琳妲、籃籃、苡萱、陳伊於新南大學眼科手術;蘇國豪、朱育賢於台中大學手術;陳禹動、嚴宏鈞、郭嚴文於中壢大學手術;成晉、筠熹、阿布舞於桃園大學手術;陳晨威、林郅為、邱柏璋、林柏豪於鳳山大學眼科接受手術;姜廣謙、呂奇旻、高景炎、布萊克薛薛於新竹大學眼科接受手術;樂樂於板橋大學眼科驗配角膜塑型片<br>
      ※老花近視雷射係指角膜雷射屈光矯正手術、抗老花晶體置換術係指屈光性晶體置換手術、飛秒老花白內障雷射係指「 Femtosecond Laser
      飛秒雷射輔助白內障前置手術加多功能人工水晶體置換術」、飛秒老花白內障雷射若要達到白內障、老花、近視、遠視、散光皆可調整，需搭配多功能水晶體
    </p>
    <p class="footer-text-1">
      ※白內障屈光手術中心：站前、新南、士林、內湖、忠孝、信林、中和興南、永和、板橋、新莊、三峽、桃園、蘆竹、中壢、龍潭、新竹、台中、豐原、嘉義、嘉義垂楊、台南、台南尚儒、左營、鳳山、精華
    </p>
    <ul class="footer-menu">
      <li>
        <div class="title" @click="toggleMenu($event, 1)">
          近視雷射
          <div class="plus" :class="{ 'minus': selectedMenu === 1 }" />
        </div>
        <Transition>
          <ul v-show="selectedMenu === 1">
            <li>
              <NuxtLink>SMILE PRO 全飛秒</NuxtLink>
            </li>
            <li>
              <NuxtLink>SMILE 全飛秒</NuxtLink>
            </li>
            <li>
              <NuxtLink>FS-LASIK 飛秒準分子</NuxtLink>
            </li>
            <li>
              <NuxtLink>見證分享</NuxtLink>
            </li>
            <li>
              <NuxtLink>方案介紹</NuxtLink>
            </li>
            <li>
              <NuxtLink>隱形眼鏡紅眼危機全飛秒</NuxtLink>
            </li>
            <li>
              <NuxtLink>近視雷射安全特刊為何選擇大學眼科</NuxtLink>
            </li>
            <li>
              <NuxtLink>常見問題 FAQ</NuxtLink>
            </li>
          </ul>
        </Transition>
      </li>
      <li>
        <div class="title" @click="toggleMenu($event, 2)">
          老花近視雷射
          <div class="plus" :class="{ 'minus': selectedMenu === 2 }" />
        </div>
        <Transition>
          <ul v-show="selectedMenu === 2">
            <li>
              <NuxtLink>老花近視雷射原理</NuxtLink>
            </li>
            <li>
              <NuxtLink>LBV 裸視美老花熟齡雷射</NuxtLink>
            </li>
            <li>
              <NuxtLink>見證分享</NuxtLink>
            </li>
            <li>
              <NuxtLink>自我檢測</NuxtLink>
            </li>
            <li>
              <NuxtLink>方案介紹</NuxtLink>
            </li>
            <li>
              <NuxtLink>為何選擇大學眼科</NuxtLink>
            </li>
            <li>
              <NuxtLink>常見問題 FAQ</NuxtLink>
            </li>
          </ul>
        </Transition>
      </li>
      <li>
        <div class="title" @click="toggleMenu($event, 3)">
          老花白内障
          <div class="plus" :class="{ 'minus': selectedMenu === 3 }" />
        </div>
        <Transition>
          <ul v-show="selectedMenu === 3">
            <li>
              <NuxtLink>什麼是白内障</NuxtLink>
            </li>
            <li>
              <NuxtLink>白内障的風險</NuxtLink>
            </li>
            <li>
              <NuxtLink>手術介紹</NuxtLink>
            </li>
            <li>
              <NuxtLink>人工水晶體</NuxtLink>
            </li>
            <li>
              <NuxtLink>施作流程&術後照護醫師家人客戶見證為何選擇大學眼科</NuxtLink>
            </li>
            <li>
              <NuxtLink>常見問題 FAQ</NuxtLink>
            </li>
          </ul>
        </Transition>
      </li>
      <li>
        <div class="title" @click="toggleMenu($event, 4)">
          角膜塑型術
          <div class="plus" :class="{ 'minus': selectedMenu === 4 }" />
        </div>
        <Transition>
          <ul v-show="selectedMenu === 4">
            <li>
              <NuxtLink>學童近視危機</NuxtLink>
            </li>
            <li>
              <NuxtLink>學童近視矯正了解角膜塑型</NuxtLink>
            </li>
            <li>
              <NuxtLink>眼科醫師推薦</NuxtLink>
            </li>
            <li>
              <NuxtLink>童星心得見證</NuxtLink>
            </li>
            <li>
              <NuxtLink>為何選擇大學眼科</NuxtLink>
            </li>
            <li>
              <NuxtLink>配戴注意事項</NuxtLink>
            </li>
            <li>
              <NuxtLink>常見問題 FAQ</NuxtLink>
            </li>
          </ul>
        </Transition>
      </li>
      <li>
        <div class="title" @click="toggleMenu($event, 5)">
          <NuxtLink>乾眼症</NuxtLink>
        </div>
      </li>
      <li>
        <div class="title" @click="toggleMenu($event, 6)">
          眼科醫療新知
          <div class="plus" :class="{ 'minus': selectedMenu === 6 }" />
        </div>
        <Transition>
          <ul v-show="selectedMenu === 6">
            <li>
              <NuxtLink>黃斑部、視網膜疾病</NuxtLink>
            </li>
            <li>
              <NuxtLink>視網膜裂孔</NuxtLink>
            </li>
            <li>
              <NuxtLink>小兒斜、弱視</NuxtLink>
            </li>
            <li>
              <NuxtLink>眼整形</NuxtLink>
            </li>
            <li>
              <NuxtLink>高透氧隱形眼鏡 RGP</NuxtLink>
            </li>
            <li>
              <NuxtLink>學童及青少年近視控制</NuxtLink>
            </li>
            <li>
              <NuxtLink>植入式微型鏡片</NuxtLink>
            </li>
          </ul>
        </Transition>
      </li>
    </ul>
    <p class="footer-text-2">
      線上諮詢週一到周六09:30-21:30 週日09:30-13:30<br>
      0800-74-74-88。
    </p>
    <p class="footer-text-3">
      大學眼科Universal Eye Center，Since 1992<br>
      Copyright © 2018 大學眼科 版權所有 All Rights Reser
    </p>
    <NuxtLink>
      個人資料保護政策
    </NuxtLink>
  </footer>
</template>
<script setup>
const targetHeight = ref(0);
const selectedMenu = ref(0);
const toggleMenu = (e, target) => {
  if (target === 5) {
    return
  }
  if (selectedMenu.value === target) {
    selectedMenu.value = 0;
  }
  else {
    selectedMenu.value = target;
    nextTick(() => {
      targetHeight.value = e.currentTarget.nextElementSibling.scrollHeight + "px";
    })
  }
};
</script>

<style scoped lang="scss">
footer {
  padding: 22px 16px 55px 16px;
  background-color: #f4f4f6;
  font-size: 12px;

  .footer-text-1 {
    color: #80828b;
    margin-bottom: 23px;
    line-height: 18px;
  }

  .footer-menu {
    border-top: 1px solid #d1d1d6;
    margin-bottom: 20px;
    color: #424245;

    a {
      text-decoration: none;
      color: #424245;
    }

    >li {
      border-bottom: 1px solid #d1d1d6;

      .title {
        padding: 14px 9px 14px 1.5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .plus {
          position: relative;
          width: 10px;
          height: 10px;
        }

        .plus:before,
        .plus:after {
          content: '';
          position: absolute;
          background-color: #424245;
        }

        .plus:before {
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          transform: translateY(-50%);
        }

        .plus:after {
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          transform: translateX(-50%);
        }

        .minus {
          width: 9px;
          height: 2px;
          background-color: #424245;
        }



      }

      ul {
        margin-top: 10px;
        padding-left: 12px;
        margin-bottom: 24px;
      }

      li {
        margin-bottom: 16px;


      }

      li:last-child {
        margin-bottom: 0;
      }

    }

    .v-enter-active,
    .v-leave-active {
      height: v-bind(targetHeight);
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .v-enter-from,
    .v-leave-to {
      height: 0;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }

  .footer-text-2 {
    line-height: 18px;
    margin-bottom: 57px;
    color: #424245;
  }

  .footer-text-3 {
    line-height: 18px;
    margin-bottom: 22px;
    color: #424245;
  }

  a {
    color: #298bff;
    text-decoration: underline;
  }
}
</style>
