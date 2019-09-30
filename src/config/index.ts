import { PlayListMenu } from "@/types/user";

export const menuDefault: PlayListMenu = {
  type: "root",
  children: [
    {
      path: "/home/discovery",
      icon: "icon-discover-music",
      title: "发现音乐"
    },
    {
      path: "/home/playlists",
      icon: "icon-yinleliebiao",
      title: "推荐歌单"
    },
    {
      path: "/home/songs",
      icon: "icon-yinle",
      title: "最新音乐"
    },
    {
      path: "/home/mvs",
      icon: "icon-shipin",
      title: "最新MV"
    }
  ]
};
