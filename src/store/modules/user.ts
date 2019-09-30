import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";
import { UserInfo } from "@/types/user";

export interface UserState {
  userInfo: UserInfo;
  isLogin: Boolean;
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements UserState {
  public userInfo: UserInfo = {};
  public isLogin = false;

  @Mutation
  private SET_USER_INFO(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  @Mutation
  private SET_IS_LOGIN(isLogin: boolean) {
    this.isLogin = isLogin;
  }

  @Action
  public Login() {
    /**
     * TODO:
     * 先模拟数据，后改成接口返回
     */
    this.SET_IS_LOGIN(true);
    let userInfo: UserInfo = {
      id: 261744914,
      avatarUrl:
        "http://p1.music.126.net/9-dp7rQwYnjip4knyLQdVA==/109951163439771000.jpg",
      nickname: "丨無诚丶"
    };
    this.SET_USER_INFO(userInfo);
  }
}

export const UserModule = getModule(User);
