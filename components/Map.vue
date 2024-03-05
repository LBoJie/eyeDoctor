<template>
  <div class="map">
    <LMap 
      ref="map"
      :zoom="zoom" 
      :max-zoom="18" 
      :center="[23.6978, 120.9605]" 
      :options="mapOptions"
      @ready="mapInitialized"
    >
      <LTileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base" 
        name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<script setup>
const mapAssets = import.meta.glob("~/assets/images/public/icon/**/*", { eager: true, import: 'default' });
const initMapImg = (mapImg) => {
  return mapAssets[mapImg]
}


const zoom = ref(7);

const map = ref(null)
const mapOptions = { attributionControl: false };
// When the map is ready
const mapInitialized = (map) => {
  map.value = map;
  const clinicIcon = L.icon({
    iconUrl: initMapImg('/assets/images/public/icon/clinic-marker.png'),
    iconSize: [26, 31.5],
  });
  const cityInfo = [
    {
      city: "台北市", coordinate: [25.0854061, 121.5615012],
      clinic: [{
        name: "站前大學眼科診所",
        coordinate: [25.0457879, 121.5099693],
        clinicPhone:"02-2375-2558",
        consultPhone:"0800-777-748",
        address:"台北市中正區館前路 8 號 3 樓 (新光三越旁、麥當勞樓上)"
      },
      {
        name: "新南大學眼科診所",
        coordinate: [25.0207283, 121.5338489],
        clinicPhone:"02-2368-8055",
        consultPhone:"0800-014-789",
        address:"台北市大安區新生南路三段 54 之 3 號"
      },
      {
        name: "忠孝大學眼科診所",
        coordinate: [25.041275, 121.551319],
        clinicPhone:"02-2740-7890",
        consultPhone:"0800-014-123",
        address:"台北市大安區忠孝東路四段 178 號 1 樓"
      },
      {
        name: "內湖大學眼科診所",
        coordinate: [25.078187, 121.582763],
        clinicPhone:"02-2795-1001",
        consultPhone:"0800-626-588",
        address:"台北市內湖區文德路100 號"
      },
      {
        name: "士林大學眼科診所",
        coordinate: [25.0965518, 121.524332],
        clinicPhone:"02-2831-6938",
        consultPhone:"0800-018-938",
        address:"台北市士林區文林路 498 號"
      },]
    },
    {
      city: "新北市", coordinate: [25.059062882521307, 121.46772746466512],
      clinic: [{
        name: "板橋大學眼科診所",
        coordinate: [25.0021154, 121.4583884],
        clinicPhone:"02-2962-9515",
        consultPhone:"0800-014-999",
        address:"新北市板橋區忠孝路 35 號 1 樓"
      },
      {
        name: "燦明大學眼科診所",
        coordinate: [25.0194819, 121.4632391],
        clinicPhone:"02-22556163",
        consultPhone:"0800-868100",
        address:"新北市板橋區文化路一段 182 號"
      },
      {
        name: "永和大學眼科診所",
        coordinate: [25.014405, 121.5128996],
        clinicPhone:"02-2923-5058",
        consultPhone:"0800-698-889",
        address:"新北市永和區永和路二段 235 號"
      },
      {
        name: "中和興南大學眼科診所",
        coordinate: [24.9919863, 121.5090032],
        clinicPhone:"02-2945-8088",
        consultPhone:"0800-881-558",
        address:"新北市中和區安樂路 3 號 (景新街、興南路口)"
      },
      {
        name: "新莊大學眼科診所",
        coordinate: [25.0394928, 121.4439582],
        clinicPhone:"02-2990-9788",
        consultPhone:"0800-507-789",
        address:"新北市新莊區新泰路 242 號"
      },
      {
        name: "三重信林大學眼科診所",
        coordinate: [25.0638629, 121.4993076],
        clinicPhone:"02-2972-9741",
        consultPhone:"0800-741-100",
        address:"新北市三重區重新路一段 51-1 號 (捷運台北橋站出口)"
      },
      {
        name: "三重大學眼科診所",
        coordinate: [25.0613108, 121.4921986],
        clinicPhone:"02-2972-9873",
        consultPhone:"0800-508-789",
        address:"新北市三重區重新路三段 30 號 (近捷運菜寮站3號出口)"
      },
      {
        name: "三峽大學眼科診所",
        coordinate: [24.9358569, 121.3717157],
        clinicPhone:"02-2673-6797",
        consultPhone:"0800-398-988",
        address:"新北市三峽區復興路 7 號"
      },]
    },
    {
      city: "桃園市", coordinate: [24.99139607878175, 121.2991203620034],
      clinic: [{
        name: "蘆竹大學眼科診所",
        coordinate: [25.0483614, 121.2891431],
        clinicPhone:"03-3521318",
        consultPhone:"0800-747-111",
        address:"桃園市蘆竹區中正路 326 號"
      },
      {
        name: "中壢國際大學眼科診所",
        coordinate: [24.9574735, 121.2213849],
        clinicPhone:"03-427-9622",
        consultPhone:"0800-010-056",
        address:"桃園市中壢區延平路483號"
      },
      {
        name: "桃園大學眼科診所",
        coordinate: [24.9910259, 121.3094835],
        clinicPhone:"03-333-1368",
        consultPhone:"0800-300-969",
        address:"桃園市桃園區復興路 112 號 1,2 樓"
      }, {
        name: "龍潭大學眼科診所",
        coordinate: [24.8677523, 121.2142765],
        clinicPhone:"03-4803852",
        consultPhone:"0800-212-211",
        address:"桃園市龍潭區北龍路 253 號"
      },]
    },
    {
      city: "新竹市", coordinate: [24.7835513, 120.9254841],
      clinic: [{
        name: "新竹大學眼科診所",
        coordinate: [24.8048399, 120.9684486],
        clinicPhone:"03-524-6488",
        consultPhone:"0800-211-789",
        address:"新竹市東區文化街 2 號"
      },]
    },
    {
      city: "台中市", coordinate: [24.2203746, 120.626228],
      clinic: [{
        name: "台中大學眼科診所",
        coordinate: [24.1535162, 120.6447737],
        clinicPhone:"04-2329-9797",
        consultPhone:"0800-014-456",
        address:"台中市南屯區大業路 309 號"
      }, {
        name: "東勢大學眼科診所",
        coordinate: [24.254013, 120.8297055],
        clinicPhone:"04-2577-4471",
        consultPhone:"0800-233-858",
        address:"台中市東勢區豐勢路 354 號"
      }, {
        name: "豐原大學眼科診所",
        coordinate: [24.2534887, 120.7193862],
        clinicPhone:"04-2522-3999",
        consultPhone:"0800-678-868",
        address:"台中市豐原區中正路 30 號"
      }, {
        name: "中科慧雯大學眼科診所",
        coordinate: [24.1886309, 120.6146016],
        clinicPhone:"04-2463-3919",
        consultPhone:"0800-618-608",
        address:"台中市西屯區西屯路三段164之21號"
      },]
    },
    {
      city: "嘉義市", coordinate: [23.4790308, 120.4080968],
      clinic:
        [{
          name: "嘉義大學眼科診所",
          coordinate: [23.4781703, 120.4448127],
          clinicPhone:"05-2270350",
          consultPhone:"0800-014-888",
          address:"嘉義市西區中山路 453 號"
        }, {
          name: "嘉義垂楊大學眼科診所",
          coordinate: [23.4728949, 120.4394021],
          clinicPhone:"05-3705642",
          consultPhone:"0800-678-808",
          address:"嘉義市西區垂楊路 505 號 1-2 樓"
        },]
    },
    {
      city: "台南市", coordinate: [22.99599479901449, 120.2146753204457],
      clinic: [{
        name: "台南大學眼科診所",
        coordinate: [22.995037048625594, 120.19773218513974],
        clinicPhone:"06-220-8241",
        consultPhone:"0800-414-888",
        address:"台南市中西區民生路二段 56 號"
      }, {
        name: "尚儒大學眼科診所",
        coordinate: [22.99053904205794, 120.22050409663173],
        clinicPhone:"06-2757789",
        consultPhone:"0800-737-088",
        address:"台南市東區長榮路二段 75 號"
      },]
    },
    {
      city: "高雄市", coordinate: [22.657058364044126, 120.31236229043097],
      clinic: [{
        name: "鳳山大學眼科診所",
        coordinate: [22.62529236159838, 120.361605967788],
        clinicPhone:"07-747-8471",
        consultPhone:"0800-014-777",
        address:"高雄市鳳山區維新路 130 號"
      }, {
        name: "左營大學眼科診所",
        coordinate: [22.6612517, 120.3044115],
        clinicPhone:"07-2620337",
        consultPhone:"0800-888-748",
        address:"高雄市左營區明誠二路 372、376 號 1-2 樓"
      },]
    },
    {
      city: "屏東縣", coordinate: [22.570154103358757, 120.53865910331734],
      clinic: [{
        name: "潮州精華大學眼科診所",
        coordinate: [22.5564553, 120.5373494],
        clinicPhone:"08-7899199",
        consultPhone:"0800-868-508",
        address:"屏東縣潮州鎮朝昇路 308 號"
      },]
    },
    // {
    //   city: "大陸地區", coordinate: [30.38855022050245, 120.39049310420732],
    //   clinic: [{
    //     name: "杭州太学眼科",
    //     coordinate: [30.26657186229474, 120.20414950081235],
    //     clinicPhone:"",
    //     consultPhone:"",
    //     address:""
    //   },
    //   {
    //     name: "上海瑞东医院太学眼科中心",
    //     coordinate: [31.226762638331635, 121.57331489498365],
    //     clinicPhone:"",
    //     consultPhone:"",
    //     address:""
    //   }]
    // }
  ];
  //縣市markers
  let cityLayer = {};
  const cityMarkers = [];
  //診所markers
  const clinicMarkers = [];
  let clinicLayer = {};
  cityInfo.forEach((item) => {
    item.clinic.forEach((clinic) => {
      clinicMarkers.push(L.marker(clinic.coordinate, {
        icon: clinicIcon
      }).bindPopup(`<p class="name">${clinic.name}</p>
      <p class="address">地址 : ${clinic.address}</p>
      <p>診所電話 : ${clinic.clinicPhone}</p>
      <p>諮詢專線 : ${clinic.consultPhone}</p>
      `).on("click", () => {
        //移至點擊的診所
        map.value.setView(clinic.coordinate, 18);
      }));
    })

    cityMarkers.push(L.marker(item.coordinate, {
      icon: L.icon({
        iconUrl: initMapImg(`/assets/images/public/icon/city-marker-${item.clinic.length}.png`),
        iconSize: [26, 31.5],
      })
    }).on("click", () => {
      // 移至點選區域 
      map.value.setView(item.coordinate, 12);
    }))
  })
  cityLayer = L.layerGroup(cityMarkers).addTo(map.value);
  clinicLayer = L.layerGroup(clinicMarkers);
  map.value.on("zoom", () => {
    if (map.value.getZoom() > 11) {
      map.value.removeLayer(cityLayer);
      clinicLayer.addTo(map.value);
    }
    else {
      map.value.removeLayer(clinicLayer);
      cityLayer.addTo(map.value);
    }
  })
};

</script>

<style lang="scss">
.map {
  width: 100%;
  height: 600px;
}
.leaflet-popup-content{
  margin: 24px 25px 33px 19px;
}
.leaflet-popup-content p{
  font-size: 12px;
  margin: 0 0 7px 0;  
  font-family: "SourceHanSansTC";
}
.leaflet-popup-content .name{
  font-weight: 700;
  font-size: 16px;
}
.leaflet-popup-content .address{
  line-height: 17px;
}
</style>