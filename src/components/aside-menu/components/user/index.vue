<template>
  <div class="user">
    <div class="unlogin" v-if="!isLogin">
      <i class="iconfont icon-user"></i>
      <p class="user-name">未登录</p>
    </div>
    <div class="login">
      <img
        :src="userInfo.avatarUrl"
        :alt="userInfo.nickname"
        class="user-avatar"
      />
      <span class="user-name">{{ userInfo.nickname }}</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";
@Component({
  name: "menu-user"
})
export default class User extends Vue {
  private isLogin = UserModule.isLogin;
  private userInfo = UserModule.userInfo;
}
</script>
<style lang="scss" scoped>
.user {
  padding: 16px;
  padding-bottom: 12px;
  cursor: pointer;
  .unlogin {
    display: flex;
    align-items: center;
    .icon-user {
      font-size: 24px;
    }
    .user-name {
      margin-left: 8px;
      font-size: 14px;
    }
  }
  &:hover {
    background: #e7e7e7;
  }
  .login {
    display: flex;
    align-items: center;
    .user-avatar {
      border-radius: 50%;
      display: block;
      height: 40px;
      width: 40px;
    }
    .user-name {
      font-size: 14px;
      color: #4a4a4a;
      margin-left: 8px;
      flex: 1;
      @include text-ellipsis;
    }
  }
}
</style>
