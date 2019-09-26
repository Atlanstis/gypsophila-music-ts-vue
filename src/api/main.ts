import { request, ResponseData } from "@/utils/axios";
import { AxiosPromise } from "axios";
// 保存表单信息
export function getPlaylistHot(data?: object): AxiosPromise<ResponseData> {
  return request({
    url: "/playlist/hot",
    data
  });
}
