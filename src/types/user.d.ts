export interface PlayListResponse {
  userId: Number;
  name: String;
  id: Number;
}

export interface PlayListInfo {
  path: String;
  icon: String;
  title: String;
}

export interface PlayListMenu {
  title?: String;
  type: "root" | "playlist";
  children: PlayListInfo[];
}

export interface UserInfo {
  id?: number;
  avatarUrl?: String;
  nickname?: String;
}
