import request from "@/utils/axios";

export const getUserPlayList = () =>
  request({
    url: "/user/playlist?uid=261744914&limit=1000"
  });
