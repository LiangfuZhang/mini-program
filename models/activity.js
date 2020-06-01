import {Http} from "../utils/Http";

class Activity {
    static locationD = 'a-2';
    static async getHomeLocationD() {
        return await Http.request({
            url: `activity/name/${this.locationD}`
        })
    }
}

export {
    Activity
}