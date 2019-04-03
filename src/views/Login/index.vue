<template>
  <div class="container">
    <div class="title">欢迎使用诺亚考试系统</div>
    <a-form
      id="login"
      :form="form"
      class="login-form"
      @submit="login">
        <a-form-item
          label="用户名"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }">
          <a-input
            v-decorator="[
              'userName'
            ]"
            placeholder="请输入用户名">
            <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, .25)" />
          </a-input>
        </a-form-item>
        <a-form-item
          label="密码"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }">
          <a-input
            v-decorator="[
              'password'
            ]"
            type="password"
            placeholder="请输入密码">
            <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, .25)"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: false
              }
            ]"
            style="float: left">记住密码</a-checkbox>
          <a-button type="primary" html-type="submit" class="btn">登录</a-button>
        </a-form-item>
    </a-form>

  </div>
</template>

<script>
  import crypto from 'crypto'

  export default {
    name: "index",
    data () {
      return {}
    },
    methods: {
      login (e) {
        this.$router.push({ path: '/home/test' })
        e.preventDefault();
        this.form.validateFields ((err, values) => {
          if (!err) {
            // 用md5算法对密码进行加密
            let md5 = crypto.createHash('md5')
            md5.update(values.password)
            const encryptPwd = md5.digest('hex')

            // 请求参数
            const params = {
              userName: values.userName,
              password: encryptPwd
            }

            this.$Api.login(params).then(res => {
              if (res.status + '' === '200') {
                if (res.data.code + '' === '1002') {
                  const userIdentity = res.data.userIdentity
                  sessionStorage.setItem('token', res.data.token)
                  sessionStorage.setItem('uid', res.data.uid)
                  sessionStorage.setItem('userName', res.data.userName)
                  sessionStorage.setItem('userIdentity', userIdentity)
                  this.$router.push({ path: '/home/test' })
                }
              }
            })
          }
        })
      },
    },
    beforeCreate() {
      this.form = this.$form.createForm(this);
    }
  }
</script>

<style scoped lang="less">
  .container {
    width: 30rem;
    height: 25rem;
    margin: 100px auto;
    border-radius: 0.4rem;
    box-shadow: 0 0 5px #999;
    border: 1px solid #ddd;

    .title {
      height: 6rem;
      line-height: 6rem;
      margin-bottom: 1rem;
      font-size: 20px;
    }

    .login-form {
      padding: 0 3rem 0 3rem;

      .btn {
        width: 100%;
      }
    }
  }
</style>
