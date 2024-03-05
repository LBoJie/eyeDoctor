<template>
  <div class="lasik-FQA">
    <h4>FQA</h4>
    <h5>
      有問，有答
    </h5>
    <ul>
      <li>
        <h6 @click="toggleQA($event, 1)">
          <img v-if="selectedQA === 1" src="~/assets/images/public/icon/minus.png" class="toggle-icon-minus">
          <img v-else src="~/assets/images/public/icon/plus.png" class="toggle-icon-plus">
          眼科醫師自己做近視雷射嗎 ?
        </h6>
        <Transition>
          <p v-show="selectedQA === 1" class="content">
            目前已有上百位眼科醫師做過雷射手術，大學眼科的新南診所院長、新莊診所院長、董事長以及很多醫生及員工都有做過雷射手術,其中,大學眼科陳霖醫師、邱立祥醫師、蘇國豪、劉冠麟、莊雅容醫師,他們本身都是需要高度用眼,作精密眼科手術的醫師,也都接受了飛秒近視雷射。
          </p>
        </Transition>
      </li>
      <li>
        <h6 @click="toggleQA($event, 2)">
          <img v-if="selectedQA === 2" src="~/assets/images/public/icon/minus.png" class="toggle-icon-minus">
          <img v-else src="~/assets/images/public/icon/plus.png" class="toggle-icon-plus">
          近視雷射有年齡限制嗎 ?
        </h6>
        <Transition>
          <p v-show="selectedQA === 2" class="content">
            內容2
          </p>
        </Transition>
      </li>
      <li>
        <h6 @click="toggleQA($event, 3)">
          <img v-if="selectedQA === 3" src="~/assets/images/public/icon/minus.png" class="toggle-icon-minus">
          <img v-else src="~/assets/images/public/icon/plus.png" class="toggle-icon-plus">
          我什麼時候可以化妝、游泳或運動 ?
        </h6>
        <Transition>
          <p v-show="selectedQA === 3" class="content">
            內容3
          </p>
        </Transition>
      </li>
      <li>
        <h6 @click="toggleQA($event, 4)">
          <img v-if="selectedQA === 4" src="~/assets/images/public/icon/minus.png" class="toggle-icon-minus">
          <img v-else src="~/assets/images/public/icon/plus.png" class="toggle-icon-plus">
          我可以隔天搭飛機嗎 ?
        </h6>
        <Transition>
          <p v-show="selectedQA === 4" class="content">
            內容4
          </p>
        </Transition>
      </li>
      <li>
        <h6 @click="toggleQA($event, 5)">
          <img v-if="selectedQA === 5" src="~/assets/images/public/icon/minus.png" class="toggle-icon-minus">
          <img v-else src="~/assets/images/public/icon/plus.png" class="toggle-icon-plus">
          術後度數會回退 ?
        </h6>
        <Transition>
          <p v-show="selectedQA === 5" class="content">
            內容5
          </p>
        </Transition>
      </li>
      <li>
        <h6 @click="toggleQA($event, 6)">
          <img v-if="selectedQA === 6" src="~/assets/images/public/icon/minus.png" class="toggle-icon-minus">
          <img v-else src="~/assets/images/public/icon/plus.png" class="toggle-icon-plus">
          近視雷射價格 ?
        </h6>
        <Transition>
          <p v-show="selectedQA === 6" class="content">
            內容6
          </p>
        </Transition>
      </li>
      <li>
        <h6 @click="toggleQA($event, 7)">
          <img v-if="selectedQA === 7" src="~/assets/images/public/icon/minus.png" class="toggle-icon-minus">
          <img v-else src="~/assets/images/public/icon/plus.png" class="toggle-icon-plus">
          如何確定我能不能做近視雷射 ?
        </h6>
        <Transition>
          <p v-show="selectedQA === 7" class="content">
            內容7
          </p>
        </Transition>
      </li>
    </ul>
  </div>
</template>
<script setup>
const targetHeight = ref(0);
const selectedQA = ref(0);

const toggleQA = (e, target) => {
  if (selectedQA.value === target) {
    selectedQA.value = 0
  }
  else {
    selectedQA.value = target;
    nextTick(() => {
      targetHeight.value = e.currentTarget.nextElementSibling.scrollHeight + "px";
    })
  }
};
</script>
<style lang="scss" scoped>
.lasik-FQA {
  color: #fff;
  padding-top: 73px;
  padding-bottom: 85px;
  background-color: #000;
  

  h4 {
    text-align: center;
    font-size: 36px;
    font-family: "PublicSans";
    font-weight: 700;
    margin-bottom: 12px;
  }

  h5 {
    text-align: center;
    font-size: 18px;
    margin-bottom: 22px;
  }

  ul {
    text-align: start;
    padding-left: 39px;
    padding-right: 39px;

    li {
      h6 {
        padding-top: 18px;
        padding-bottom: 14px;
        padding-left: 11px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #3e3a39;

        .toggle-icon-minus {
          width: 13px;
          height: 3px;
          margin-right: 13px;
        }

        .toggle-icon-plus {
          width: 13px;
          margin-right: 13px;
        }
      }

      .content {
        font-size: 14px;
        line-height: 21px;
        padding-left: 37px;
        padding-right: 25px;
        margin-top: 12px;
        margin-bottom: 21px;
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
  }
}
</style>