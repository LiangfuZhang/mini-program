import {promisic} from "../miniprogram_npm/lin-ui/utils/util";
import {config} from "../config/config";

class Http {
    static async request({url,data,method="GET"}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            header: {
                appKey: config.appKey
            },
            method,
            data
        })
        return res.data
    }
}

export {
    Http
}