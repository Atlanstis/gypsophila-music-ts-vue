<template>
  <div class="aside-menu">
    <user />
    <div class="menus">
      <div class="menu-block" v-for="(menu, index) of menus" :key="index">
        <div v-if="menu.title" class="menu-title">{{ menu.title }}</div>
        <router-link
          :to="children.path"
          active-class="menu-item-active"
          v-for="children of menu.children"
          :key="children.path"
          class="menu-item"
          tag="div"
        >
          <i class="iconfont" :class="children.icon"></i>
          <span>{{ children.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import User from "./components/user/index.vue";
import { getUserPlayList } from "@/api/user";
import { PlayListResponse, PlayListInfo, PlayListMenu } from "@/types/user";
import { UserModule } from "@/store/modules/user";
import { menuDefault } from "@/config/index";

@Component({
  name: "aside-menu",
  components: {
    User
  }
})
export default class AsideMenu extends Vue {
  private menus: PlayListMenu[] = [];

  mounted() {
    this.getUserPlayList();
  }

  private async getUserPlayList() {
    this.menus.push(menuDefault);
    if (UserModule.isLogin) {
      let userId = UserModule.userInfo.id;
      const data: any = await getUserPlayList();
      let playListCreate: PlayListInfo[] = [];
      let playListFavor: PlayListInfo[] = [];
      data.playlist.map((play: PlayListResponse) => {
        let info: PlayListInfo = {
          icon: "icon-yinleliebiao",
          path: `/home/playlist/${play.id}`,
          title: play.name
        };
        play.userId === userId
          ? playListCreate.push(info)
          : playListFavor.push(info);
      });
      this.menus.push({
        title: "创建的歌单",
        type: "playlist",
        children: playListCreate
      });
      this.menus.push({
        title: "收藏的歌单",
        type: "playlist",
        children: playListFavor
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.aside-menu {
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  .menu-block {
    margin-bottom: 12px;
    .menu-title {
      font-size: 12px;
      padding-left: 16px;
      margin-bottom: 12px;
      color: #909090;
    }
    .menu-item {
      font-size: 14px;
      color: #4a4a4a;
      padding: 10px 16px;
      cursor: pointer;
      @include text-ellipsis;
      &:hover {
        background: #e7e7e7;
      }
      &-active {
        color: #d33a31;
        background: #e2e2e2;
        .iconfont {
          color: #d33a31;
        }
      }
      .iconfont {
        font-size: 16px;
        padding-right: 8px;
      }
    }
  }
}
</style>
