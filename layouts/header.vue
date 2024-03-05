<template>
  <header>
    <NuxtLink to="/">
      <img src="~/assets/images/public/icon/logo.png" class="logo">
    </NuxtLink>
    <div class="link">
      <NuxtLink to="/">
        <img src="~/assets/images/public/icon/location.png" class="location">
      </NuxtLink>
      <NuxtLink to="/">
        <img src="~/assets/images/public/icon/phone.png" class="phone">
      </NuxtLink>
      <NuxtLink>
        <img src="~/assets/images/public/icon/hamburger.png" class="hamburger">
      </NuxtLink>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  align-items: center;
  background: #fff;
}

.logo {
  width: 59px;
}

.link {
  margin-left: auto;
  display: flex;
  align-items: center;

  a {
    margin-left: 32px;
  }

  .location {
    width: 13px;
  }

  .phone {
    width: 13px;
  }

  .hamburger {
    width: 19px;
  }
}
</style>