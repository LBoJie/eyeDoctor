<template>
  <div 
    v-for="marquee in marquees"
    :key="marquee.marqueeItems" 
    class="marquee" 
    @mouseover="listHover(marquee)"
    @mouseleave="listLeave(marquee)"
  >
    <div class="list" :style="`transform:translateX(-${marquee.start}px)`">
      <div
        v-for="marqueeItem in marquee.marqueeItems"
        :key="marqueeItem.img" 
        class="marquee-item"
        @click="goHref(marqueeItem.href)"
      >
        <img :src="marqueeItem.img" alt="">
      </div>
    </div>
  </div>
  <div class="control-btn-wrap">
    <button class="control-btn" @click="controlMarquee">
      <svg v-show="!marqueeStop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <g id="圖層_2" data-name="圖層 2">
          <g id="圖層_2-2" data-name="圖層 2">
            <path 
              class="btn-color"
              d="M18,36A18,18,0,1,1,36,18,18,18,0,0,1,18,36ZM18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Z" 
            />
            <rect 
              class="btn-color"
              x="13.85"
              y="12.3"
              width="2" 
              height="11.22"
            />
            <rect 
              class="btn-color" 
              x="20.11"
              y="12.3" 
              width="2" 
              height="11.22"
            />
          </g>
        </g>
      </svg>
      <svg v-show="marqueeStop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <g id="圖層_2" data-name="圖層 2">
          <g id="圖層_1-2" data-name="圖層 1">
            <path 
              class="btn-color"
              d="M18,36A18,18,0,1,1,36,18,18,18,0,0,1,18,36ZM18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Z"
            />
            <polygon class="btn-color" points="13.55 10.26 13.55 26.2 26.05 18.23 13.55 10.26" />
          </g>
        </g>
      </svg>
    </button>
  </div>
</template>
<script setup>
const props = defineProps({
  marqueeValue: {
    type: Array,
    default() { return [] }
  },
  buttonColor: {
    type: String,
    default: "#fff"
  }
});
const marquees = ref(JSON.parse(JSON.stringify(props.marqueeValue)));
const btnColor = props.buttonColor;
const listHover = (marquee) => {
  if (!marqueeStop.value) {
    marquee.moveSpeed = marquee.hoverSpeed;
  }
}
const listLeave = (marquee) => {
  if (!marqueeStop.value) {
    marquee.moveSpeed = marquee.speed;
  }
}
const goHref = (href) => {
  console.log(href);
  location.href = href;

}
const marqueeStop = ref(false);
const controlMarquee = () => {
  marqueeStop.value = !marqueeStop.value;
  marquees.value.forEach((marquee) => {
    marquee.moveSpeed = marqueeStop.value ? 0 : marquee.speed;
  });
};
onMounted(() => {
  marquees.value.forEach((marquee) => {
    marquee.moveSpeed = marquee.speed;
    marquee.originalLength = marquee.marqueeItems.length;
    marquee.needMarqueeQuantity = Math.ceil(window.innerWidth / 225);
    for (let i = 0; i < marquee.needMarqueeQuantity; i++) {
      marquee.marqueeItems.push(marquee.marqueeItems[i % marquee.originalLength]);
    }
    setInterval(() => {
      marquee.start += marquee.moveSpeed;
      if (marquee.start / 225 >= marquee.originalLength) {
        marquee.start = 0;
      }
    }, 0);
  })
});
</script>
<style lang="scss" scoped>
.marquee-wrap {
  position: relative;
}

.marquee {
  width: 100%;
  overflow: hidden;
  margin-bottom: 14px;
}

.list {
  display: flex;
  will-change: transform;
}

.list .marquee-item {
  width: 211px;
  height: 119px;
  margin-right: 14px;
  flex-shrink: 0;
}

.list .marquee-item img {
  width: 100%;
}

.control-btn-wrap {
  margin-top: 27px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;

  .control-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 37px;
    height: 37px;

    .btn-color {
      fill: v-bind(btnColor);
    }
  }
}
</style>