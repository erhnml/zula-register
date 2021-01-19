<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">Zula'da</h2>
          <h2 class="title">Seçme</h2>
          <h2 class="title">Özgürlüğü!</h2>
          <h3 class="sub-title">Efsane silahlar ve</h3>
          <h3 class="sub-title">Karakterleri şimdi seç,</h3>
          <h3 class="sub-title">Oynamaya başla!</h3>
          <h3 class="form-title">Hesabini oluştur ve oynamaya başla!</h3>
          <Input
            v-model="username"
            placeholder="Kullanici Adi"
            icon="username"
            type="text"
          />
          <Input
            v-model="email"
            placeholder="E-posta"
            icon="email"
            type="email"
          />
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
  }
  .row {
    display: flex;
  }
  .col {
    width: 50%;
  }
  .title {
    color: #ff9e01;
    margin: 0;
    text-transform: uppercase;
    line-height: 1.2;
    &:first-child {
      font-size: 75px;
    }
    &:nth-child(2) {
      font-size: 95px;
    }
    &:nth-child(3) {
      font-size: 50px;
      margin-bottom: 30px;
    }
  }

  .sub-title {
    font-size: 36px;
    color: white;
    line-height: 1.3;
    margin: 0;
    text-transform: uppercase;
  }
  .form-title {
    font-size: 24px;
    color: #ff9e01;
    margin-top: 30px;
    text-transform: uppercase;
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
}
</style>
