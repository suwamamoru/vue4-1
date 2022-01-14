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
      <p class="error" v-show="errorMessage">このユーザーまたはメールアドレスは既に登録されています。</p>
      <div class="buttons">
        <button class="signup-btn" @click="signupInput()">新規登録</button>
        <br><router-link to="/login" class="login-guide">ログインはこちらから</router-link>
      </div>
      <div class="copyright">
        <p>Copyright ©️2021 oo Inc. All rights reserved.</p>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      user: '',
      email: '',
      password: '',
      users: [],
      registration: {
        user: '',
        email: ''
      },
      errorMessage: false
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      const db = firebase.firestore()
      db.collection('users').onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.users.push(doc.data())
          this.users.forEach(userData => {
            this.registration.user = userData.user
            this.registration.email = userData.email
          })
        })
      })
    },
    signupInput() {
      if(this.user === '' | this.email === '' | this.password === '')return
      const db = firebase.firestore()
      if(this.registration.user === this.user || this.registration.email === this.email) {
        this.errorMessage = true
      } else {
        this.errorMessage = false
        db.collection('users').add({
          user: this.user,
          email: this.email,
          password: this.password
        })
        this.user = '',
        this.email = '',
        this.password = ''
      }
    }
  }
}
</script>

<style>
table {
  margin: auto;
}

.error {
  font-size: 12px;
  color: red;
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