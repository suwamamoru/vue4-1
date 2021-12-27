<template>
  <div class="signup">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>新規登録画面</h1>
    <form @submit.prevent>
      <table>
        <tr>
          <td>ユーザー名</td>
          <td><input type="text" v-model="user" placeholder="userName"></td>
        </tr>
        <tr>
          <td>メールアドレス</td>
          <td><input type="text" v-model="email" placeholder="E-mail"></td>
        </tr>
        <tr>
          <td>パスワード</td>
          <td><input type="text" v-model="password" placeholder="Password"></td>
        </tr>
      </table>
      <div class="buttons">
        <button class="signup-btn" @click="signupInput(signupInfoData)">新規登録</button>
        <br><router-link to="/login" class="login-guide">ログインはこちらから</router-link>
      </div>
      <div class="copyright">
        <p>Copyright ©️2021 oo Inc. All rights reserved.</p>
      </div>
    </form>
    {{$store.getters.signupInfoData}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      email: '',
      password: '',
      signupInfoData: []
    }
  },
  methods: {
    signupInput(signupInfoData) {
      if(this.user === '' | this.email === '' | this.password === '')return
      const signupInfo = {
        user: this.user,
        email: this.email,
        password: this.password
      }
      this.signupInfoData.push(signupInfo)
      this.user = ''
      this.email = ''
      this.password = ''
      this.$store.dispatch("getSignupInfoData", signupInfoData)
      return this.$store.getters.signupInfoData
    }
  }
}
</script>

<style>
table {
  margin: auto;
}

.buttons {
  padding-top: 30px
}

.signup-btn {
  width: 100px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 1vh;
  border: 1px solid #6495ed;
  color: #6495ed;
}

.login-guide {
  color: #6495ed;
}

.copyright {
  padding-top: 10px;
}
</style>