<template>
  <a-layout id="container" class="layout">
    <a-layout-sider collapsible v-model="collapsed" class="sider">
      <!--<div class="sider-logo">自己起名字</div>-->
      <a-menu theme="dark" mode="inline">
        <a-menu-item v-for="item in siderMenuList" :key="item.key" @click="routerChange(item)">
          <a-icon :type="item.icon" />
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff">
        <div class="header-right">
          <div class="user">
            <a-icon type="user" />
            admin
          </div>
          <a-icon type="poweroff" class="logout" @click="logout" />
        </div>
      </a-layout-header>
      <a-layout-content style="padding: 32px 50px;">
        <div :style="{ background: '#fff', padding: '24px', minHeight: '100%' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
  export default {
    data() {
      return {
        collapsed: false,
        userName: 'admin',
        siderMenuList: []
      }
    },
    methods: {
      // 切换路由
      routerChange (item) {
        this.$router.push({ path: item.path })
      },
      logout () {
        const params = {
          uid: sessionStorage.getItem('uid')
        }
        this.$Api.logout(params).then(res => {
          if (res.status + '' === '200') {
            if (res.data.code + '' === '1005') {
              sessionStorage.clear()
              this.$router.push({ path: '/login' })
            }
          }
        })
      }
    },
    created () {
      this.userName = sessionStorage.getItem('userName')
      // 添加侧边栏菜单
      this.siderMenuList = [
        {
          key: 0,
          icon: 'plus',
          name: '菜单示范',
          path: '/home/example'
        }
      ]
    }
  }
</script>

<style lang="less">
  .layout {
    height: 100%;

    .sider {
      .sider-logo {
        height: 32px;
        margin: 16px;
        font-size: 15px;
        font-weight: bold;
        font-style: italic;
        line-height: 32px;
        color: #fff;
        background: rgba(255,255,255,.2);
      }
    }

    .ant-layout-header {
      padding: 0;
      display: flex;
      justify-content: flex-end;

      .header-right {
        display: flex;
        align-items: center;

        .user {
          width: 6rem;
          height: 20px;
          font-size: 1.1rem;
          font-weight: 300;
          color: #333;
          line-height: 20px;
          border-right: 1px solid #ccc;
        }

        .logout {
          height: 20px;
          width:4rem;
          font-size: 1.1rem;
          cursor: pointer;
          color: #333;
          line-height: 20px;
          margin-right: 10px;
        }
      }
    }

    .admin-header {
      justify-content: flex-end;
    }

    .tester-header {
      justify-content: space-between;

      .header-logo {
        width: 150px;
        height: 32px;
        margin: 16px;
        font-size: 15px;
        font-weight: bold;
        font-style: italic;
        line-height: 32px;
        color: #fff;
        background: rgba(255,255,255,.2);
      }

      .header-right {
        .user {
          width: 8rem;
          color: #fff;
          padding-right: 10px;
          margin: 22px 0 22px 0;
        }
        .logout {
          color: #fff
        }
      }
    }
  }
</style>
