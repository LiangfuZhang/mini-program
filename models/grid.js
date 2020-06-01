import {Http} from "../utils/Http";

class Grid {
    static async getHomeLocationC() {
        return await Http.request({
            url:"category/grid/all"
        })
    }
}

export {
    Grid
}