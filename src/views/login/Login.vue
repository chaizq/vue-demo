<template>
  <a-col :span="12">
    <div class="login-body">
      <a-form
          id="formLogin"
          class="user-layout-login"
          ref="formLogin"
          :form="form"
          @submit="handleSubmit"
      >
        <a-tabs
            :activeKey="customActiveKey"
            :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
            @change="handleTabClick"
        >
          <a-tab-pane key="tab1" tab="账号密码登录">
            <a-alert v-if="isLoginError" type="error" showIcon message="账户或密码错误"/>
            <br />
            <a-form-item>
              <a-input
                  size="large"
                  type="text"
                  placeholder="请输入帐户"
                  v-decorator="[
                      'account',
                      {rules: [{ required: true, message: '请输入帐户' }], validateTrigger: 'change'}
                    ]"
              >
                <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }" />
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-input
                  size="large"
                  type="password"
                  autocomplete="false"
                  placeholder="请输入密码"
                  v-decorator="[
                      'password',
                      {rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur'}
                    ]"
              >
                <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }" />
              </a-input>
            </a-form-item>
          </a-tab-pane>
        </a-tabs>

        <a-form-item style="margin-top:24px">
          <a-button
              size="large"
              type="primary"
              htmlType="submit"
              class="login-button"
              :loading="state.loginBtn"
              :disabled="state.loginBtn"
          >登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </a-col>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      const validateUsername = (rule, value, callback) => {
        callback()
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不低于六位数！'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined,
        checked: false
      }
    },
    mounted() {
      this.getCookie()
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            if (this.checked) {
              this.setCookie(this.loginForm.username, this.loginForm.password, 7)
            } else {
              this.clearCookie()
            }
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm).then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      setCookie(c_name, c_pwd, exdays) {
        const exdate = new Date()
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays)
        window.document.cookie = 'userName' + '=' + c_name + ';path=/;expires=' + exdate.toGMTString()
        window.document.cookie = 'password' + '=' + c_pwd + ';path=/;expires=' + exdate.toGMTString()
      },
      getCookie: function() {
        if (document.cookie.length > 0) {
          const arr = document.cookie.split('; ')
          for (let i = 0; i < arr.length; i++) {
            const arr2 = arr[i].split('=')
            if (arr2[0] === 'userName') {
              this.loginForm.username = arr2[1]
            } else if (arr2[0] === 'password') {
              this.loginForm.password = arr2[1]
            }
          }
          this.checked = true
        }
      },
      clearCookie: function() {
        this.setCookie('', '', -1)
      }
    }
  }
</script>

<style lang="less">
  /* 修复input 背景不协调 和光标变色 */

  @bg:#283443;
  @light_gray:#fff;
  @cursor:#fff;

  @supports (-webkit-mask: none) and (not (cater-color: @cursor)) {
    .login-container .el-input input {
      color: @cursor;
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: @light_gray;
        height: 47px;
        caret-color: @cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0 1000px @bg inset !important;
          -webkit-text-fill-color: @cursor !important;
        }
      }
      .rf {
        float: right;
      }
      .box {
        min-width: 350px;
        margin-left: 50px;
        width: 30%;
      }
      // eslint-disable-next-line
      /*.clearfix: a-form {*/
      /*  content: ".";*/
      /*  display: block;*/
      /*  height: 0;*/
      /*  visibility: hidden;*/
      /*  clear: both;*/
      /*}*/
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="less" scoped>
  @bg:#2d3a4b;
  @dark_gray:#889aa4;
  @light_gray:#eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: @bg;
    overflow: hidden;

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: @dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: @light_gray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: @dark_gray;
      cursor: pointer;
      user-select: none;
    }
  }
</style>