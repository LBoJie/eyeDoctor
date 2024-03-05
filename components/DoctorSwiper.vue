<template>
  <div ref="autoPlayPosition">
    <Swiper class="swiper" v-bind="swiperConfig" @swiper="onSwiper" @autoplay-time-left="progressFill">
      <SwiperSlide @click="showModal(1)">
        <img src="~/assets/images/swiper/Doctor/1.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(2)">
        <img src="~/assets/images/swiper/Doctor/2.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(3)">
        <img src="~/assets/images/swiper/Doctor/3.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(4)">
        <img src="~/assets/images/swiper/Doctor/4.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(5)">
        <img src="~/assets/images/swiper/Doctor/5.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(6)">
        <img src="~/assets/images/swiper/Doctor/6.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(7)">
        <img src="~/assets/images/swiper/Doctor/7.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(8)">
        <img src="~/assets/images/swiper/Doctor/8.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(9)">
        <img src="~/assets/images/swiper/Doctor/9.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(10)">
        <img src="~/assets/images/swiper/Doctor/10.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(11)">
        <img src="~/assets/images/swiper/Doctor/11.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(12)">
        <img src="~/assets/images/swiper/Doctor/12.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(13)">
        <img src="~/assets/images/swiper/Doctor/13.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(14)">
        <img src="~/assets/images/swiper/Doctor/14.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(15)">
        <img src="~/assets/images/swiper/Doctor/15.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(16)">
        <img src="~/assets/images/swiper/Doctor/16.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(17)">
        <img src="~/assets/images/swiper/Doctor/17.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(18)">
        <img src="~/assets/images/swiper/Doctor/18.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(19)">
        <img src="~/assets/images/swiper/Doctor/19.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(20)">
        <img src="~/assets/images/swiper/Doctor/20.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(21)">
        <img src="~/assets/images/swiper/Doctor/21.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(22)">
        <img src="~/assets/images/swiper/Doctor/22.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(23)">
        <img src="~/assets/images/swiper/Doctor/23.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(24)">
        <img src="~/assets/images/swiper/Doctor/24.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(25)">
        <img src="~/assets/images/swiper/Doctor/25.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(26)">
        <img src="~/assets/images/swiper/Doctor/26.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(27)">
        <img src="~/assets/images/swiper/Doctor/27.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(28)">
        <img src="~/assets/images/swiper/Doctor/28.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(29)">
        <img src="~/assets/images/swiper/Doctor/29.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(30)">
        <img src="~/assets/images/swiper/Doctor/30.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(31)">
        <img src="~/assets/images/swiper/Doctor/31.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(32)">
        <img src="~/assets/images/swiper/Doctor/32.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(33)">
        <img src="~/assets/images/swiper/Doctor/33.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(34)">
        <img src="~/assets/images/swiper/Doctor/34.webp" loading="lazy">
      </SwiperSlide>
      <SwiperSlide @click="showModal(35)">
        <img src="~/assets/images/swiper/Doctor/35.webp" loading="lazy">
      </SwiperSlide>
      <template #container-end>
        <div class="autoplay-progress-wrap">
          <div ref="progressFillBar" class="autoplay-progress-fill" />
        </div>
      </template>
    </Swiper>
    <!-- <span class="punctuation">．</span> -->
    <Transition>
      <div v-if="modalShow" class="modal-bg">
        <div class="modal-content">
          <div class="modal-close">
            <img src="~/assets/images/public/icon/modal-close.png" alt="" @click="closeModal">
          </div>
          <!-- <div class="position" /> -->
          <img class="avatar" :src="modalContent.avatar" alt="">
          <div class="doctor-experience" v-html="modalContent.content" />
        </div>
      </div>
    </Transition>
  </div>
</template>
  
<script setup>

const swiperConfig = {
  modules: [SwiperNavigation, SwiperAutoplay],
  navigation: true,
  loop: true,
  lazyPreloadPrevNext: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
}
const autoPlayPosition = ref(null);
const modalShow = ref(false);
const modalContent = ref({
  content: "",
  avatar: ""
});

const allDoctorContent = {
  1: '<p class="title">醫師介紹</p><p class="paragraph-1">林丕容醫師<span class="punctuation">，</span>從唸醫學院開始<span class="punctuation">，</span>就陸續考取各項專業證照<span class="punctuation">，</span>包括西醫師<span class="punctuation">、</span>中醫師<span class="punctuation">、</span>公共衛生<span class="punctuation">、</span>證券金融分析師<span class="punctuation">、</span>高級營業員<span class="punctuation">、</span>會計師和化工工程師等共有 7 張證照<span class="punctuation">，</span>很會唸書<span class="punctuation">、</span>考照的他<span class="punctuation">，</span>現在的興趣是進修<span class="punctuation">，</span>亦在忙碌的工作中<span class="punctuation">，</span>從台大 EMBA 畢業<span class="punctuation">，</span>林丕容說<span class="punctuation">，</span>跨領域的學習<span class="punctuation">，</span>讓他的視野更廣<span class="punctuation">，</span>也替自己創造更多機會<span class="punctuation">。</span></p><p class="paragraph-1">林丕容醫師亦是國內引進雷射視力矯正技術的先驅之一<span class="punctuation">，</span>但他表示<span class="punctuation">，</span>從大學時期<span class="punctuation">，</span>不斷嘗試跨領域學習<span class="punctuation">，</span>除了醫師執照外<span class="punctuation">，</span>還擁有包括化工<span class="punctuation">、</span>會計<span class="punctuation">、</span>證券金融分析師等非醫學專業的證照<span class="punctuation">，</span>同時也深入古老的中醫領域<span class="punctuation">，</span>這些學習不是為了分數<span class="punctuation">，</span>不是為了別人<span class="punctuation">，</span>完全是為自己心裡的那張企業藍圖<span class="punctuation">，</span>要用商業模式經營醫療事業<span class="punctuation">，</span>為更多人提供更多樣的服務<span class="punctuation">。</span></p><p class="paragraph-1">林丕容強調<span class="punctuation">，</span>考取證照不是重點<span class="punctuation">，</span>重點是中間獲取知識的過程<spanclass="punctuation">，</span>因為廣博涉獵<span class="punctuation">，</span>才能用更開闊的視野讓旗下大學眼科診所成為全台規模最大的眼科連鎖<spanclass="punctuation">，</span>他不只分享成功的故事<span class="punctuation">，</span>更要跟所有人溝通如何運用知識的力量<spanclass="punctuation">，</span>矯正對生涯規畫的<span class="left-parenthesis">「</span>近視」<spanstyle="margin-left: -8px;">。</span></p><p class="paragraph-1">大學林醫師指出 21 世紀是更加重視人的健康生活<span class="punctuation">、</span>生命價值的世紀<spanclass="punctuation">，</span>人們活的愈久<span class="punctuation">，</span>愈好<spanclass="punctuation">，</span>愈能享受科技的好處<span class="punctuation">，</span>活的更有活力<spanclass="punctuation">、</span>有價值<span class="punctuation">、</span>更青春<spanclass="punctuation">，</span>他所想要創造的就是這樣一個環境<span class="punctuation">，</span>讓大學光學從醫療美容<spanclass="punctuation">、</span>眼科醫療<span class="punctuation">、</span>到眼鏡美學的提供等<spanclass="punctuation">，</span>架構出一個美好的環境<span class="punctuation">。</span></p><p class="title">醫師經歷</p><p class="paragraph-2"><span class="publicSans">1984</span> 年<br><span class="punctuation">．</span>取得化工工程師執照</p><p class="paragraph-2"><span class="publicSans">1985</span> 年<br><span class="punctuation">．</span>通過美國醫師資格考試 (<span class="publicSans">ECFMG</span>)<br><span class="punctuation">．</span>中醫師檢定合格</p><p class="paragraph-2"><span class="publicSans">1986</span> 年<br><span class="punctuation">．</span>台灣大學醫學院醫學系畢業<br><span class="punctuation">．</span>取得台灣醫師證書</p><p class="paragraph-2"><span class="publicSans">1987</span> 年<br><span class="punctuation">．</span>取得放射線診斷醫師證書</p><p class="paragraph-2"><span class="publicSans">1991</span> 年<br><span class="punctuation">．</span>通過會計師考試<br><span class="punctuation">．</span>取得會計師證書<br><span class="punctuation">．</span>美國<span class="publicSans">Cedar Sinai</span>醫學中心研修準分子激光術 (<spanclass="publicSans">PRK</span>)</p><p class="paragraph-2"><span class="publicSans">1992</span> 年<br><span class="punctuation">．</span>台大醫學中心眼科總住院醫師<br><span class="punctuation">．</span>取得台灣眼科專科醫師證書<br></p><p class="paragraph-2"><span class="publicSans">1992</span> 年<br><span class="punctuation">．</span>創辦大學眼科中心<br><span class="punctuation">．</span>台大醫學中心眼科主治醫師<br><span class="punctuation">．</span>台灣眼科專科醫師<br><span class="punctuation">．</span><span class="left-parenthesis">「</span>台灣激光醫學會」會員<br><span class="punctuation">．</span><span class="left-parenthesis">「</span>台灣醫用超聲波學會」會員<br><span class="punctuation">．</span><span class="left-parenthesis">「</span>台灣醫學會」會員<br></p><p class="paragraph-2"><span class="publicSans">1993</span> 年<br><span class="punctuation">．</span>台灣首屆白內障超聲波乳化術研習會指導醫師</p><p class="paragraph-2"><span class="publicSans">1995</span> 年<br><span class="punctuation">．</span>美國眼科醫學會會員 (<span class="publicSans">AAO</span>)<br><span class="punctuation">．</span>美國白內障及屈光手術學會會員 (<span class="publicSans">ASCRS</span>)<br><span class="punctuation">．</span>美國<span class="publicSans">Casebeer</span>準分子激光及屈光手術<br>中心研究員 (<span class="publicSans">ALK/LASIK</span>)<br></p><p class="paragraph-2"><span class="publicSans">1997</span> 年<br><span class="punctuation">．</span>美國<span class="publicSans">VISX</span>準分子激光公司授與研訓合格證書 (<spanclass="publicSans">PRK/LASIK</span>)<br><span class="punctuation">．</span>英國<span class="publicSans">Laser Vision</span>教授指導研修準分子激光術結業 (<spanclass="publicSans">PRK/LASIK</span>)<br><span class="punctuation">．</span>韓國江南聖母醫學中心研修準分子激光術 (<span class="publicSans">PRK/LASIK</span>)<br><span class="punctuation">．</span>台灣首例以<span class="publicSans">VISX STAR</span>準分子激光儀執行<spanclass="publicSans">LASIK</span>之手術醫師<br></p><p class="paragraph-2"><span class="publicSans">1999</span> 年<br><span class="punctuation">．</span>獲邀擔任台灣第一屆<span class="left-parenthesis">「</span>角膜屈光手術研習會」指導醫師殊榮<br></p><p class="paragraph-2"><span class="publicSans">2001</span> 年 <span class="publicSans">3</span> 月<br><span class="punctuation">．</span>獲邀於<span class="left-parenthesis">「</span>亞太眼科醫學會」上發表<spanclass="publicSans">LASIK 10,000.</span>成功案例<br>專題演講，醫療技術精湛，頗獲醫界共同推崇</p><p class="paragraph-2"><span class="publicSans">2003</span> 年<br><span class="punctuation">．</span><span class="left-parenthesis">「</span>中華民國醫用雷射學會」理事<br></p><p class="paragraph-2"><span class="publicSans">2005</span> 年<br><span class="punctuation">．</span><span class="left-parenthesis">「</span>中華民國醫用雷射學會」理事<br><span class="punctuation">．</span><span class="left-parenthesis">「</span>社團法人台灣白內障及屈光手術醫學會」理事<br></p><p class="paragraph-2"><span class="publicSans">2006</span> 年<br><span class="punctuation">．</span>榮獲第十五屆<span class="left-parenthesis">「</span>國家磐石獎」</p><p class="paragraph-2"><span class="publicSans">2007</span> 年<br><span class="punctuation">．</span>榮獲第三十屆<span class="left-parenthesis">「</span>青年創業楷模」<br></p><p class="paragraph-2"><span class="publicSans">2008</span> 年<br><span class="punctuation">．</span>榮獲<span class="left-parenthesis">「</span>2008安永國際創業家大獎」<br></p><p class="paragraph-2"><span class="publicSans">2009</span> 年<br><span class="punctuation">．</span>榮獲第二屆<span class="left-parenthesis">「</span>台灣商業服務業優良品牌」<br><span class="punctuation">．</span>外貿協會見證大學光學與福建醫科大學簽訂兩岸醫療合作協議</p><p class="paragraph-2"><span class="publicSans">2010</span> 年<br><span class="punctuation">．</span>獲邀於科林第二屆<span class="publicSans">Z-LASIK</span>飛秒激光區光手術發展與經營高峰論壇發表專題演講</p><p class="paragraph-2"><span class="publicSans">2010</span> 年<br><span class="punctuation">．</span>中國科協年會-福建醫科大學合作簽約<br><span class="punctuation">．</span>大學眼科診所通過<spanclass="publicSans">JCI</span>(美國醫療衛生機構認證聯合委員會)認證，成為國內第一家具備<spanclass="left-parenthesis">「</span><span>JCI</span>認證」的診所。<br></p><p class="paragraph-2"><span class="publicSans">2011</span> 年<br><span class="punctuation">．</span>獲邀於科林<span class="publicSans">LDV</span>達芬奇飛秒激光用戶高峰會發表專題演講<br><span class="left-parenthesis">「</span>中華民國醫用雷射光電學會」第十二屆理事<br><span class="punctuation">．</span>取得廣州暨南大學-生物醫學工程博士學位</p><p class="paragraph-2"><span class="publicSans">2013</span> 年<br><span class="punctuation">．</span>台灣第一屆飛秒白內障手術示範指導醫師<br><span class="punctuation">．</span><span class="left-parenthesis">「</span>無刀老花近視雷射」榮獲<spanclass="publicSans">SNQ</span>國家品質標章認證<span class="punctuation">．</span>大學眼科再度榮獲<span class="publicSans">JCI</span>國際醫療認證</p><p class="paragraph-2"><span class="publicSans">2014</span> 年<br><span class="punctuation">．</span>金三明葉黃素系列產品(金寶明、金晶明、金愛爾明)<br>榮獲<span class="publicSans">SNQ</span>國家品質標章認證<br><span class="punctuation">．</span>金晶明葉黃素獲得國家生技醫療品質獎</p><p class="title">現任</p><p class="paragraph-3"><span class="punctuation">．</span>大學光學科技股份有限公司 技術長<br><span class="punctuation">．</span>大學眼科 榮譽總院長<br><span class="punctuation">．</span>台大醫院眼科部 兼任主治醫師</p><p class="title">臨床經驗</p><p class="paragraph-3"><span class="punctuation">．</span>近視、老花屈光手術約 200,000 例<br><span class="punctuation">．</span>白內障超聲波乳化術約 70,000 例</p><p class="title">論文發表</p><p class="paragraph-2">1.EMLA<br>2.Surgical correction of Dysthyroid Upper Eyelid Retraction.<br>3.The Influence of Brow and Ciliary Tattooing, and Lid Cosmetics on Blepharoplasty.<br>4.Lacrimal Sac Carcinoma - A Case Report.<br>5.Lacrimal Gland Adenocarcinoma - A Case Report.<br>6.Sutureless Blepharoplasty.<br>7.Clinical Experiences with Split - Level Lid Resection and Levator Hitch.<br>8.The Influence of Brow and Ciliary Tattooing, and Lid Cosmetics on Blepharoplasty.<br>9.Late Spontaneous Hyphema Following Trabeculectomy - Report of two cases.</p>',
  2: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>台大醫院眼科醫師<br><span class="punctuation">．</span>台大醫院眼科兼任主治醫師<br><span class="punctuation">．</span>中華民國眼科醫學會專科醫師<br><span class="punctuation">．</span>美國白內障暨屈光手術醫學會會員<br><span class="punctuation">．</span>大學眼科診所門診講師<br><span class="punctuation">．</span>大學眼科診所雷射手術主治醫師</p>',
  3: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>前汐止國泰醫院眼科主治醫師<br><span class="punctuation">．</span>前國泰醫院眼科總醫師<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員<br><span class="punctuation">．</span>台灣視光學會證照考試及格<br><span class="punctuation">．</span>美國USMLE考試及格<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>美國眼科醫師學會會員</p>',
  4: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>中華民國視光學及屈調驗光醫學會會員<br><span class="punctuation">．</span>曾任中華民國眼科醫學會理事<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員<br><span class="punctuation">．</span>曾任眼科醫學會兒童視力保健召集人<br><span class="punctuation">．</span>教育部視力保健種子醫師<br><span class="punctuation">．</span>教育部部定副教授<br><span class="punctuation">．</span>臺大醫院副教授<br><span class="punctuation">．</span>前台北市中興醫院眼科主任<br><span class="punctuation">．</span>前信林眼科診所院長(15年)</p>',
  5: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>台北醫學院醫學系醫學士<br><span class="punctuation">．</span>台北市立陽明醫院主治醫師<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國雷射醫學會會員<br><span class="punctuation">．</span>歐洲白內障及屈光手術醫學會會員<br><span class="punctuation">．</span>歐洲視網膜醫學會會員<br><span class="punctuation">．</span>大學眼科診所眼科門診講師<br><span class="punctuation">．</span>大學眼科診所白內障手術主治醫師<br><span class="punctuation">．</span>大學眼科診所眼科雷射手術講師<br><span class="punctuation">．</span>大學眼科診所醫學美容主治醫師</p>',
  6: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>士林大學眼科院長<br><span class="punctuation">．</span>CatAR白內障手術訓練系統發明人<br><span class="punctuation">．</span>臺灣大學資訊工程博士<br><span class="punctuation">．</span>臺大醫院眼科部兼任主治醫師<br><span class="punctuation">．</span>臺大醫院視網膜、眼角膜、青光眼、眼整形科研究員<br><span class="punctuation">．</span>中華民國眼科醫學會資訊委員<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會教育委員會暨資訊委員會委員<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員<br><span class="punctuation">．</span>台灣醫用雷射光電學會會員<br><span class="punctuation">．</span>長庚大學傑出校友<br><span class="punctuation">．</span>2014年亞太白內障暨屈光手術醫學會白內障影片競賽首獎</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>白內障微切口手術、飛秒雷射白內障手術<br><span class="punctuation">．</span>近視雷射、老花雷射、Smile雷射手術<br><span class="punctuation">．</span>視網膜黃斑部病變之雷射治療及眼內藥物注射治療<br><span class="punctuation">．</span>青光眼治療及青光眼雷射手術<br><span class="punctuation">．</span>眼瞼疾病、角結膜疾病<br><span class="punctuation">．</span>乾眼症淚管塞治療及脈衝光治療<br><span class="punctuation">．</span>復發性角膜糜爛雷射手術治療<br><span class="punctuation">．</span>學童視力保健、弱視治療<br><span class="punctuation">．</span>角膜塑型片驗配、全客製角膜塑型片驗配<br><span class="punctuation">．</span>日戴型近視控制隱形眼鏡驗配<br><span class="punctuation">．</span>醫學驗光配鏡</p>',
  7: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>前新光醫院眼科兼任主治醫師<br><span class="punctuation">．</span>臺大醫院眼科部視網膜專科研習醫師<br><span class="punctuation">．</span>私立輔仁大學醫學系臨床助理教師<br><span class="punctuation">．</span>私立輔仁大學附設診所眼科主治醫師<br><span class="punctuation">．</span>中華民國眼科專科醫師及眼科醫學會會員<br><span class="punctuation">．</span>美國眼科醫學會會員<br><span class="punctuation">．</span>國際眼科醫師會考(ICO)通過<br><span class="punctuation">．</span>中華民國醫用雷射光電學會會員<br><span class="punctuation">．</span>中華民國白內障及屈光手術學會會員</p>',
  8: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>慧雯眼科診所院長<br><span class="punctuation">．</span>臺中榮總眼科專科醫師<br><span class="punctuation">．</span>台灣醫用雷射光電學會會員<br><span class="punctuation">．</span>台灣白內障暨屈光手術醫學會會員<br><span class="punctuation">．</span>臺中市醫師公會代表<br><span class="punctuation">．</span>美國哈佛大學麻州眼耳醫院進修</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>近視雷射手術<br><span class="punctuation">．</span>近視角膜塑型片驗配及近視全方面管理<br><span class="punctuation">．</span>乾眼症診斷與治療</p>',
  9: '另開連結',
  10: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>長庚醫院資深主治醫師(19年)<br><span class="punctuation">．</span>白內障雷射專家(美國LenSx研訓認證)<br><span class="punctuation">．</span>大學眼科白內障手術指導醫師<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會 理事(1、2屆)<br><span class="punctuation">．</span>美國眼科醫學會會員(AAO)<br><span class="punctuation">．</span>美國白內障及屈光手術學會會員(ASCRS)<br><span class="punctuation">．</span>中華民國醫用超音波學會認證專業醫師</p>',
  11: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>中國醫藥大學醫學系<br><span class="punctuation">．</span>彰化基督教醫院總醫師暨臨床研究醫師<br><span class="punctuation">．</span>台大醫院眼科部眼整型研究醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員醫師<br><span class="punctuation">．</span>中華民國視光學及屈調驗光醫學會會員醫師</p>',
  12: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>高雄醫學大學醫學系畢業<br><span class="punctuation">．</span>臺大醫院眼科總醫師<br><span class="punctuation">．</span>中華民國西醫師<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>中華民國中醫師<br><span class="punctuation">．</span>中華民國針灸專科醫師<br><span class="punctuation">．</span>中華民國中西整合醫學會會員</p>',
  13: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>前高雄長庚醫院眼科主治醫師<br><span class="punctuation">．</span>美國UCLA眼科研究員<br><span class="punctuation">．</span>美國眼科醫學會會員<br><span class="punctuation">．</span>美國白內障屈光手術學會會員<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會會員<br><span class="punctuation">．</span>中華民國眼科醫學會理事<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員<br><span class="punctuation">．</span>中華民國醫用雷射醫學會會員<br><span class="punctuation">．</span>前左營陽明醫院院長</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>微創小切口飛秒雷射白內障手術<br><span class="punctuation">．</span>微創小切口白內障超音波水晶體乳化手術<br><span class="punctuation">．</span>飛秒雷射近視屈光矯正手術<br><span class="punctuation">．</span>準分子雷射近視屈光手術<br><span class="punctuation">．</span>植入式晶片屈光矯正手術<br><span class="punctuation">．</span>青光眼手術<br><span class="punctuation">．</span>重症乾眼症之內外科治療<br><span class="punctuation">．</span>鼻淚管手術</p>',
  14: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>臺北醫學大學醫學系畢業<br><span class="punctuation">．</span>林口長庚醫院眼科專科醫師<br><span class="punctuation">．</span>基隆長庚醫院眼科臨床研究醫師<br><span class="punctuation">．</span>中壢天晟醫院眼科主治醫師<br><span class="punctuation">．</span>中華民國眼科醫學會<br><span class="punctuation">．</span>中華民國美容醫學會會員</p><p class="title">主治項目</p><p class="paragraph-2"><span class="punctuation">．</span>飛秒老花白內障雷射手術<br><span class="punctuation">．</span>微創白內障超音波乳化術<br><span class="punctuation">．</span>視網膜病變及青光眼雷射治療<br><span class="punctuation">．</span>近視雷射視力矯正術<br><span class="punctuation">．</span>學童視力保健、角膜塑型術<br><span class="punctuation">．</span>精配眼鏡、隱形眼鏡<br><span class="punctuation">．</span>一般眼疾診治</p><p class="title">醫師介紹</p><p class="paragraph-1">有美女眼科醫師之稱的鐘珮禎<span class="punctuation">，</span>即日起將擔任永和大學眼科診所院長<spanclass="punctuation">。</span>鐘院長以優異成績畢業於臺北醫學大學醫學系<span class="punctuation">，</span>先後服務於多家大型醫院<span class="punctuation">，</span>臨床診治經驗相當豐富<span class="punctuation">。</span></p><p class="paragraph-1">打開電視<span class="punctuation">，</span>常常會看到鐘院長在節目上專業分享眼睛的預防保健與治療方法<span class="punctuation">，</span>因為眼睛是從小到大陪伴我們看清這世界的重要夥伴<span class="punctuation">，</span>因此鐘院長堅持為全民的眼睛健康把關<span class="punctuation">，</span>除一般眼疾治療外<span class="punctuation">，</span>她又特別專精於白內障治療、學童視力保健及微整形<span class="punctuation">。</span></p><p class="paragraph-1">鑒於近視族群年齡層不斷下降<span class="punctuation">、</span>學童近視度數增加快速等現象<spanclass="punctuation">，</span>鐘院長十分重視幼兒視力保健<spanclass="punctuation">，</span>她認為從小就養成良好的用眼習慣是幫助預防近視的重要關鍵<spanclass="punctuation">。</span>而過去認為老年人才會出現的白內障<span class="punctuation">，</span>也隨著現代人生活型態改變提早報到<spanclass="punctuation">，</span>所幸近年來手術技術大幅進步<span class="punctuation">，</span>讓白內障不再是棘手的問題<spanclass="punctuation">。</span></p><p class="paragraph-1">除了清晰的視野<span class="punctuation">，</span>現代人也同時希望追求眼睛外在的美麗<span class="punctuation">，</span>尋求眼部微整形<spanclass="punctuation">，</span>眼科醫師因為有眼科專業背景為後盾<span class="punctuation">，</span>精確瞭解眼睛的細部構造<spanclass="punctuation">，</span>讓求診的民眾更能放心<span class="punctuation">。</span>鐘院長目前也受邀至各大電視台<spanclass="punctuation">，</span>不僅每天在門診幫助病人解決眼疾困擾<span class="punctuation">，</span>更希望傳遞大眾正確的眼睛保健及衛教觀念<spanclass="punctuation">，</span>一同享有健康亮麗的靈魂之窗<span class="punctuation">。</span></p><p class="paragraph-1">★鐘醫師的有聲書<span class="left-parenthesis">《</span>一刻鯨選-名醫教你養出好眼力》<span class="punctuation">:</span><br><NuxtLink to="https://bit.ly/3QoBoiS" target="_blank">https://bit.ly/3QoBoiS</NuxtLink></p><p class="title">影片採訪</p><p class="paragraph-3">民視《異言堂》採訪鐘院長 說明高齡眼疾問題</p><iframe class="video" src="https://www.youtube.com/embed/_K5oT3cNjdQ" title="民視《異言堂》採訪鐘院長 說明高齡眼疾問題" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p class="paragraph-3">鐘院長受邀年代MUCH台<span class="left-parenthesis">《</span>健康好生活<span class="right-parenthesis">》</span>談3C對眼睛的傷害</p><iframe class="video" src="https://www.youtube.com/embed/7YVpjdxqcXo" title="鐘珮禎：手機、平板保姆增加，眼睛傷害不可  逆!【健康好生活】" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen ></iframe>',
  15: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>成大醫院眼科主治醫師<br><span class="punctuation">．</span>成大醫學院醫學系講師<br><span class="punctuation">．</span>美國眼科醫學會會員<br><span class="punctuation">．</span>美國白內障及近視手術學會會員<br><span class="punctuation">．</span>日本京都大學眼科研究員<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>前李尚儒眼科診所 院長(25年)</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>視網膜專長<br><span class="punctuation">．</span>白內障手術<br><span class="punctuation">．</span>雷射近視手術<br><span class="punctuation">．</span>青光眼<br><span class="punctuation">．</span>學童視力保健</p>',
  16: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>高雄醫學大學 醫學系<br><span class="punctuation">．</span>長庚醫院眼科總醫師<br><span class="punctuation">．</span>臺大醫院眼整形臨床研究員<br><span class="punctuation">．</span>臺大醫院視網膜臨床研究員<br><span class="punctuation">．</span>臺大醫院眼科部兼任主治醫師<br><span class="punctuation">．</span>臺大醫院雲林分部眼科專任主治醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員<br><span class="punctuation">．</span>台灣眼整形美容重建手術醫學會會員<br><span class="punctuation">．</span>德國蔡司原廠認證SMILE手術醫師</p><p class="title">專長</p><p class="paragraph-3">近視老花雷射手術(SMILE / LASIK)<span class="punctuation">、</span>白內障小切口超音波乳化手術<span class="punctuation">、</span>美容手術(雙眼皮<span class="punctuation">、</span>眼袋手術<span class="punctuation">、</span>玻尿酸<span class="punctuation">、</span>肉毒注射)<span class="punctuation">、</span>眼瞼下垂<span class="punctuation">、</span>眼瞼內外翻<span class="punctuation">、</span>睫毛倒插<span class="punctuation">、</span>鼻淚管阻塞<span class="punctuation">、</span>甲狀腺眼病變<span class="punctuation">、</span>視網膜剝離手術<span class="punctuation">、</span>黃斑部病變<span class="punctuation">、</span>糖尿病視網膜病變<span class="punctuation">、</span>網膜雷射<span class="punctuation">、</span>青光眼雷射與藥物治療<span class="punctuation">、</span>學童視力保健<span class="punctuation">、</span>近視治療<span class="punctuation">、</span>配鏡驗光<span class="punctuation">、</span>斜弱視矯正<span class="punctuation">、</span>一般眼疾<span class="punctuation">。</span></p>',
  17: '<p class="title">醫師經歷</p><p class="paragraph-2">．中華民國眼科專科醫師<br>．中華民國美容醫學醫學會會員<br>．微創注射整形美容訓練班結業<br>．雷射脈衝光訓練班結業<br>．美國美容醫學會會員<br>．美國抗老化醫學會會員<br>．衛生署合格針灸醫師<br>．全國醫師高考及特考及格<br>．大學眼科診所門診講師<br>．大學眼科診所醫療美容講師</p>',
  18: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>前台北國泰醫學中心眼科主治醫師<br><span class="punctuation">．</span>美國明尼蘇達大學角膜研究員<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>中華民國雷射醫學會會員<br><span class="punctuation">．</span>大學眼科診所門診講師<br><span class="punctuation">．</span>大學眼科診所雷射手術講師</p>',
  19: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>長庚大學醫學系醫學士<br><span class="punctuation">．</span>林口長庚醫院眼科專科醫師<br><span class="punctuation">．</span>林口長庚醫院眼整形科研究員<br><span class="punctuation">．</span>台灣眼整形美容重建手術醫學會會員<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會會員<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>中華民國醫用雷射光電學會會員</p><p class="title">專長</p><p class="paragraph-2">白內障手術<span class="punctuation">、</span>眼整形<span class="punctuation">、</span>角膜塑型</p>',
  20: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>行政院衛生署新竹醫院內科醫師<br><span class="punctuation">．</span>林口長庚醫學中心眼整型科研究醫師<br><span class="punctuation">．</span>林口長庚醫學中心眼科主治醫師<br><span class="punctuation">．</span>中華民國眼科醫學會專科醫師<br><span class="punctuation">．</span>中華民國美容醫學醫學會專科醫師<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會會員醫師<br><span class="punctuation">．</span>台灣微整型美塑醫學會會員醫師<br><span class="punctuation">．</span>韓國首爾BK東洋整型外科診所進修<br><span class="punctuation">．</span>亞洲國際內視鏡拉提手術課程結訓與認證</p>',
  21: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>國泰綜合醫院眼科總醫師<br><span class="punctuation">．</span>慈濟綜合醫院台北分院視網膜研究醫師<br><span class="punctuation">．</span>慈濟綜合醫院台北分院眼科主治醫師<br><span class="punctuation">．</span>慈濟大學醫學系醫學士<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>中華民眼科教授醫學會會員</p>',
  22: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>前敏盛醫院眼科主治醫師<br><span class="punctuation">．</span>前長庚醫院專科主治醫師<br><span class="punctuation">．</span>美國眼科醫學會會員<br><span class="punctuation">．</span>教育部視力保健專科醫師<br><span class="punctuation">．</span>大學眼科診所門診講師<br><span class="punctuation">．</span>大學眼科診所白內障手術主治醫師<br><span class="punctuation">．</span>大學眼科診所雷射手術講師</p>',
  23: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員</p>',
  24: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>中國醫藥大學醫學系畢業<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>國泰綜合醫院眼科主治醫師<br><span class="punctuation">．</span>中華民國雷射醫學會會員<br><span class="punctuation">．</span>台大醫院眼科部眼整型研修<br><span class="punctuation">．</span>大學眼科診所眼科門診講師<br><span class="punctuation">．</span>大學眼科診所雷射手術主治醫師</p>',
  25: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>辜柏楠眼科診所院長<br><span class="punctuation">．</span>前臺大醫院眼科醫師<br><span class="punctuation">．</span>前臺灣署立豐原醫院眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>國立陽明大學醫學士</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>一般眼疾<br><span class="punctuation">．</span>兒童視力保健<br><span class="punctuation">．</span>弱視訓練<br><span class="punctuation">．</span>近視矯正<br><span class="punctuation">．</span>青光眼<br><span class="punctuation">．</span>乾眼症<br><span class="punctuation">．</span>白內障<br><span class="punctuation">．</span>視網膜病變<br><span class="punctuation">．</span>醫學精準驗光配</p>',
  26: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>成大醫學系醫學士<br><span class="punctuation">．</span>嘉義基督教醫院眼科部主治醫師<br><span class="punctuation">．</span>衛生福利部新營醫院兼主治醫師<br><span class="punctuation">．</span>台大醫院總院眼科部研究員<br><span class="punctuation">．</span>台灣角膜移植手術資格認證醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員<br><span class="punctuation">．</span>現任嘉義垂楊大學眼科診所執行院長</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>準分子(LASIK)<span class="punctuation">、</span>全飛秒(SMILE) 雷射近視矯正手術<br><span class="punctuation">．</span>微創小切口白內障超音波乳化術<br><span class="punctuation">．</span>高階精準飛秒白內障雷射手術<br><span class="punctuation">．</span>角膜移植手術<br><span class="punctuation">．</span>眼瞼下垂<span class="punctuation">、</span>內翻<span class="punctuation">、</span>倒睫矯正手術<br><span class="punctuation">．</span>眼翼移除併無針羊膜修補手術<br><span class="punctuation">．</span>黃斑部病變<span class="punctuation">、</span>糖尿病視網膜病變<span class="punctuation">、</span>青光眼、乾眼症、角膜感染<br><span class="punctuation">．</span>兒童視力保健<span class="punctuation">、</span>角膜塑型近視控制鏡片</p>',
  27: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>長庚大學醫學士<br><span class="punctuation">．</span>長庚大學臨床醫學研究所博士<br><span class="punctuation">．</span>中華民國眼科醫學會<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會<br><span class="punctuation">．</span>中華民國視光學及屈調驗光醫學會會員<br><span class="punctuation">．</span>教育部視力保健種子醫師<br><span class="punctuation">．</span>林口長庚醫院住院醫師訓練<br><span class="punctuation">．</span>美國賓州匹茲堡大學眼科研究員<br><span class="punctuation">．</span>長庚大學醫學院助理教授<br><span class="punctuation">．</span>中台科技大學視光系兼任助理教授<br><span class="punctuation">．</span>台北長庚醫院講師級主治醫師<br><span class="punctuation">．</span>嘉義長庚醫院 眼科主任</p><p class="title">專長</p><p class="paragraph-2">白內障手術<span class="punctuation">、</span>近視屈光雷射手術、學童視力保健<br>眼角膜及眼表層組織疾病專科<span class="punctuation">、</span>角膜塑型驗配<br>眼整形手術<span class="punctuation">、</span>乾眼症治療<span class="punctuation">、</span>一般眼疾診治</p>',
  28: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>國泰醫學中心眼科主治醫師、總醫師<br><span class="punctuation">．</span>嘉義基督教醫院眼科醫師<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員醫師<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會會員醫師<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科視覺光學及屈調驗光課程研習會合格醫師</p>',
  29: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>高雄醫學大學醫學系畢業<br><span class="punctuation">．</span>前高雄醫學院附設醫院眼科主治醫師<br><span class="punctuation">．</span>前高雄市立大同醫院眼科醫師<br><span class="punctuation">．</span>前高雄市立小港醫院眼科醫師<br><span class="punctuation">．</span>前阮綜合醫院眼科主治醫師<br><span class="punctuation">．</span>新加坡國家眼科中心研究員<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>小切口超音波白內障手術<br><span class="punctuation">．</span>雷射屈光手術<br><span class="punctuation">．</span>玻璃體及視網膜手術<br><span class="punctuation">．</span>兒童視力保健<br><span class="punctuation">．</span>一般眼疾<br><span class="punctuation">．</span>眼整型手術<br><span class="punctuation">．</span>視網膜、青光眼疾病治療</p>',
  30: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>前中華民國眼科醫學會理事<br><span class="punctuation">．</span>中華民國屈光醫學會理事<br><span class="punctuation">．</span>美國愛爾康公司白內障手術顧問<br><span class="punctuation">．</span>2006年世界華人醫學會白內障手術現場示範<br><span class="punctuation">．</span>2007年台灣區眼科醫學會白內障手術現場示範<br><span class="punctuation">．</span>2008年台灣區眼科醫學會白內障手術現場講評<br><span class="punctuation">．</span>2010年台灣區眼科醫學會白內障手術現場示範<br><span class="punctuation">．</span>2012年亞培眼科研討會白內障手術現場講評<br><span class="punctuation">．</span>前信合美眼科診所院長<br><span class="punctuation">．</span>前同喬眼科診所院長<br><span class="punctuation">．</span>精華眼科診所院長</p>',
  31: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>美國醫師執照考試(USMLE)資格<br><span class="punctuation">．</span>前台北市立聯合醫院 眼科醫師<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會會員<br><span class="punctuation">．</span>台灣眼科學教授學術醫學會會員<br><span class="punctuation">．</span>台灣眼整形美容重建醫學會會員<br><span class="punctuation">．</span>台北馬偕紀念醫院代訓 青光眼專科</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>微切口白內障超音波乳化術<br><span class="punctuation">．</span>青光眼、視網膜、黃斑部病變診治<br><span class="punctuation">．</span>學童視力保健<br><span class="punctuation">．</span>角膜塑形術<br><span class="punctuation">．</span>近視、遠視、散光、老花矯正</p>',
  32: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>台北醫學大學醫學士<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>台北榮總眼科專科醫師訓練<br><span class="punctuation">．</span>陽明醫學院眼科臨床講師<br><span class="punctuation">．</span>國防醫學院眼科臨床講師<br><span class="punctuation">．</span>前沙鹿童綜合醫院眼科主任<br><span class="punctuation">．</span>前余眼科診所院長(開業30年)</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>白內障、視網膜疾病<br><span class="punctuation">．</span>微切口白內障超音波乳化術<br><span class="punctuation">．</span>乾眼症、飛蚊症等一般眼疾治療<br><span class="punctuation">．</span>青光眼診治及藥物治療<br><span class="punctuation">．</span>學童視力保健(近視等屈光不正、弱視治療)<br><span class="punctuation">．</span>角膜塑型鏡片驗配<br><span class="punctuation">．</span>醫學驗光配鏡</p>',
  33: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>高雄醫學大學醫學士<br><span class="punctuation">．</span>中華民國眼科醫學會會員<br><span class="punctuation">．</span>台灣眼整形美容重建手術醫學會會員<br><span class="punctuation">．</span>中華民國醫用雷射醫學會會員<br><span class="punctuation">．</span>前醫學中心彰化基督教醫院眼科主治醫師<br><span class="punctuation">．</span>前員林基督教醫院眼科主治醫師<br><span class="punctuation">．</span>台中清泉醫院眼科主治醫師<br><span class="punctuation">．</span>南投佑民醫院眼科主任醫師<br><span class="punctuation">．</span>台中驗光師/驗光生公會醫學顧問<br><span class="punctuation">．</span>德國蔡司原廠認證SMILE手術醫師<br><span class="punctuation">．</span>美國愛爾康原廠認證LASIK手術醫師</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>近視老花雷射手術(SMILE/LASIK/PRK)<br><span class="punctuation">．</span>飛秒雷射/微創超音波白內障手術<br><span class="punctuation">．</span>眼部整形:雙眼皮/眼袋/眼瞼下垂手術<br><span class="punctuation">．</span>學童角膜塑型片/兒童近視控制眼鏡</p>',
  34: '<p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>前美國紐約大學研究員暨眼耳醫院眼科進修<br><span class="punctuation">．</span>前美國哈佛大學醫學院麻省眼耳醫院進修<br><span class="punctuation">．</span>國立陽明大學臨床講師<br><span class="punctuation">．</span>國立國防醫學院臨床講師<br><span class="punctuation">．</span>前南崁大學眼科診所院長<br><span class="punctuation">．</span>前大明眼科診所院長(21年)<br><span class="punctuation">．</span>前台北榮總眼科主治醫師<br><span class="punctuation">．</span>前台北榮總視網膜科主治醫師<br><span class="punctuation">．</span>前台北榮總特約主治醫師<br><span class="punctuation">．</span>前行政院衛生署視力保健中心特約專科醫師<br><span class="punctuation">．</span>中華民國眼科專科醫師<br><span class="punctuation">．</span>中華民國眼科醫學會視網膜醫學會會員<br><span class="punctuation">．</span>中華民國醫用雷射光電學會會員</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>白內障、視網膜疾病診治<br><span class="punctuation">．</span>乾眼症、飛蚊症等一般眼疾治療<br><span class="punctuation">．</span>青光眼診治及藥物治療<br><span class="punctuation">．</span>學童視力保健(近視等屈光不正、弱視治療)<br><span class="punctuation">．</span>角膜塑型鏡片驗配<br><span class="punctuation">．</span>醫學驗光配鏡</p>',
  35: ' <p class="title">醫師經歷</p><p class="paragraph-2"><span class="punctuation">．</span>台大醫院眼科部兼任主治醫師<br><span class="punctuation">．</span>衛生福利部桃園醫院主治醫師<br><span class="punctuation">．</span>台大醫院眼科部角膜專科研究員<br><span class="punctuation">．</span>台大醫院眼科部整形專科研究員<br><span class="punctuation">．</span>中華民國眼科醫學會專科醫師<br><span class="punctuation">．</span>台灣白內障及屈光手術醫學會會員<br><span class="punctuation">．</span>台灣眼科學教授醫學會會員<br><span class="punctuation">．</span>中華民國醫用雷射光電學會會員<br><span class="punctuation">．</span>台北醫學大學醫學系</p><p class="title">專長</p><p class="paragraph-2"><span class="punctuation">．</span>白內障手術<br><span class="punctuation">．</span>眼整形手術<br><span class="punctuation">．</span>視網膜雷射<br><span class="punctuation">．</span>青光眼、眼瞼疾病、角結膜疾病<br><span class="punctuation">．</span>學童視力保健<br><span class="punctuation">．</span>一般眼疾</p>',
};
const showModal = (targetModal) => {
  if (targetModal === 9) {
    window.open("https://www.eyedoctor.com.tw/H.Y.Lin/About.aspx", "_blank");
    return;
  }
  swiperInstance.value.autoplay.pause();
  modalContent.value.content = allDoctorContent[targetModal];
  modalContent.value.avatar = new URL(`/assets/images/swiper/Doctor/avatar-${targetModal}.webp`, import.meta.url).href;
  modalShow.value = true;
}
const closeModal = () => {
  swiperInstance.value.autoplay.resume();
  modalShow.value = false
}
const progressFillBar = ref(null);
const swiperInstance = ref(null);
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  swiperInstance.value.autoplay.pause();
  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      swiperInstance.value.autoplay.resume();
      observer.unobserve(autoPlayPosition.value);
    }
  }, { threshold: 1 });

  observer.observe(autoPlayPosition.value);

};
const progressFill = (s, time, progress) => {
  progressFillBar.value.style.setProperty("width", `${(1 - progress) * 100}%`);
};

</script>
<style scoped lang="scss">
:deep(.swiper-button-prev) {
  top: 198px;
  width: 40px;
  height: 40px;
  left: 22px;
}

:deep(.swiper-button-prev)::after {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/public/icon/swiper-prev-2.png");
  background-size: cover;
  font-size: 0;

}

:deep(.swiper-button-next) {
  top: 198px;
  width: 40px;
  height: 40px;
  right: 7px;
}

:deep(.swiper-button-next)::after {
  width: 100%;
  height: 100%;
  background-image: url("~/assets/images/public/icon/swiper-next-2.png");
  background-size: cover;
  font-size: 0;
}

.swiper {
  height: 559px;
}

.swiper-slide {
  img {
    width: 100%;
  }
}

.autoplay-progress-wrap {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: #181818;
  z-index: 1;

  .autoplay-progress-fill {
    width: 0;
    height: 100%;
    background-color: #afafb0;
  }
}

.modal-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 55px 26px;
  backdrop-filter: blur(20px);
  background-color: rgba(45, 45, 45, 0.7);
  z-index: 10;

  .modal-content {
    background-color: #000;
    padding: 4px 16px 42px 16px;
    height: 100%;
    border-radius: 25px;
    text-align: start;
    overflow-y: scroll;

    .modal-close {
      position: sticky;
      top: 17px;
      padding-right: 2px;
      text-align: end;

      img {
        width: 36px;
        height: 36px;
      }

    }

    .avatar {
      display: block;
      margin: 0 auto;
      max-width: 315.5px;
      width: 100%;
    }

    :deep(.doctor-experience) {
      .punctuation {
        margin-left: -2px;
        margin-right: -2px;
      }

      .left-parenthesis {
        margin-left: -6px;
      }

      .right-parenthesis {
        margin-right: -6px;
      }

      .publicSans {
        font-family: "PublicSans";
        font-weight: 400;
      }



      .title {
        font-size: 16px;
        font-weight: 700;
        margin-top: 49px;
        margin-bottom: 16px;
      }

      .paragraph-1 {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 18px;
      }

      .paragraph-2 {
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 13px;
      }

      .paragraph-3 {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 13px;
      }

      .video {
        width: 100%;
        height: 185px;
        margin-bottom: 49px;
        border-radius: 10px;
      }
    }

  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>