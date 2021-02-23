<template>
  <div class="login-container">
    <header class="logo">
    </header>
    <div class="side">
      <a-form-model ref="loginForm"
                    class="login-form"
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    :model="loginForm"
                    :rules="rules">
        <a-form-model-item has-feedback
                           label="用户名"
                           prop="username">
          <a-input v-model="loginForm.username"
                   type="text"
                   autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item has-feedback
                           label="密码"
                           prop="password">
          <a-input v-model="loginForm.password"
                   type="password"
                   autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14 }"
                           has-feedback
                           label="验证码"
                           prop="authCode ">
          <a-input v-model.number="loginForm.authCode" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 2}">
          <a-button type="primary"
                    @click="submitForm('loginForm')">
            登录
          </a-button>
          <a-button style="margin-left: 10px"
                    @click="resetForm('loginForm')">
            重置
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import './Login.css';
export default {


  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      loginForm: {
        username: '',
        password: '',
        authCode: ''
      },
      rules: {}
    }
  },

  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.service)
          this.service.loginIn({ username: this.loginForm.username, password: this.loginForm.password }).then((res) => {
            console.log(res)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
  }
}
</script>

<style>
</style>