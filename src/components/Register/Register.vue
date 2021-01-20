<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Zula'da</h2>
          <h2 class="title">Seçme</h2>
          <h2 class="title">Özgürlüğü!</h2>
          <h3 class="sub-title">EFSANE SİLAHLAr VE</h3>
          <h3 class="sub-title">KARAKTERLERİ ŞİMDİ SEÇ,</h3>
          <h3 class="sub-title">Oynamaya başla!</h3>
          <h3 class="form-title">Hesabini oluştur ve oynamaya başla!</h3>
          <Input
            v-model="username"
            placeholder="Kullanıcı Adı"
            icon="username"
            type="text"
          />
          <Input v-model="email" placeholder="E-posta" icon="email" />
          <Input
            v-model="password"
            placeholder="Şifre"
            icon="password"
            type="password"
          />
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="terms"
              v-model="userAgr"
              :true-value="true"
              :false-value="false"
            />
            <label class="checkbox-label" for="terms"
              >*Kullanıcı Sözleşmesini ve Davranış Kurallarını okudum ve kabul
              ediyorum
            </label>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="announce"
              v-model="announce"
              :true-value="true"
              :false-value="false"
            />
            <label class="checkbox-label" for="announce"
              >Duyuru ve Bilgilendirme E-postası Almak İstiyorum
            </label>
          </div>
          <div class="buttons">
            <Button
              :disabled="!userAgr"
              bgColor="orange"
              title="Hemen katil"
              :onClick="handleClick"
            />
            <Button bgColor="green" title="Ücretsiz İndir" />
          </div>
        </div>
        <div class="col">
          <div class="carousel-wrapper">
            <Carousel
              :items="bigGuns"
              v-model="selectedBigGun"
              headerTitle="SİLAHINI SEÇ"
            />
            <Carousel
              :items="guns"
              v-model="selectedGun"
              headerTitle="Tabancanı Seç"
            />
            <Carousel
              :items="knives"
              v-model="selectedKnife"
              headerTitle="Bıçağını Seç"
            />
            <Carousel
              :items="characters"
              v-model="selectedCharacter"
              headerTitle="KARAKTERİNİ SEÇ"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register {
  background: url(../../assets/background.png) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 50px 0;
  .container {
    max-width: 1100px;
    margin: 0 auto;
    @media only screen and (max-width: 768px) {
      padding: 0 20px;
      overflow: hidden;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .col {
    width: 50%;
    @media only screen and (max-width: 768px) {
      width: 100%;
      &:first-child {
        order: 2;
      }
    }
  }
  .title {
    color: #ff9e01;
    margin: 0;
    text-transform: uppercase;
    line-height: 1.2;
    &:first-child {
      font-size: 100px;
      @media only screen and (max-width: 768px) {
        font-size: 65px;
        margin-top: 30px;
      }
    }
    &:nth-child(2) {
      font-size: 130px;
      @media only screen and (max-width: 768px) {
        font-size: 85px;
      }
    }
    &:nth-child(3) {
      font-size: 65px;
      margin-bottom: 30px;
      @media only screen and (max-width: 768px) {
        font-size: 45px;
        margin-bottom: 10px;
      }
    }
  }
  .sub-title {
    font-size: 42px;
    color: white;
    line-height: 1.3;
    margin: 0;
    text-transform: uppercase;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  .form-title {
    font-size: 24px;
    color: #ff9e01;
    margin-top: 30px;
    text-transform: uppercase;
    @media only screen and (max-width: 768px) {
      font-size: 16px;
      margin-top: 10px;
    }
  }
  .checkbox-wrapper {
    &:first-child {
      margin-top: 20px;
    }
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    label {
      color: white;
      margin-left: 5px;
      font-size: 15px;
    }
  }
  .buttons {
    margin-top: 20px;
  }
  .carousel-wrapper {
    padding-left: 75px;
    @media only screen and (max-width: 768px) {
      padding: 0px 15px;
    }
  }
}
</style>
