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
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements UserState {
  public userInfo: UserInfo = {
    id: 0
  };

  @Mutation
  private SET_USER_INFO(userInfo: UserInfo) {
    this.userInfo = userInfo;
  }

  @Action
  public Login() {
    /**
     * TODO:
     * 先模拟数据，后改成接口返回
     */
    let userInfo: UserInfo = {
      id: 261744914
    };
    this.SET_USER_INFO(userInfo);
  }
}

export const UserModule = getModule(User);
