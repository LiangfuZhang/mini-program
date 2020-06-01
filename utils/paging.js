import {Http} from "./Http";

class Paging {

    req
    start
    count
    locker=false
    url
    accumulator=[]
    moreData=true

    constructor(req,start=0,count=10) {
        this.req = req
        this.start = start
        this.count = count
        this.url = req.url
    }

    async getMoreData() {
        if (!this.moreData) {
            return
        }
        if (this._getLocker()) {
            const data = await this._actualGetData()
            this._releaseLocker()
            return data
        }
    }

    async _actualGetData() {
        const req = this._getCurrentReq()
        let paging = await Http.request(req)
        if (!paging) {
            return null
        }
        if (paging.total === 0) {
            return {
                empty: true,
                items: [],
                moreData: false,
                accumulator: []
            }
        }
        this.moreData = this._moreData(paging.total_page, paging.page)
        if (this.moreData) {
            this.start += this.count
        }
        await this._accumulate(paging.items)
        return {
            empty: false,
            items: paging.items,
            moreData: this.moreData,
            accumulator: this.accumulator
        }
    }

    _moreData(totalPage,pageNum) {
        return pageNum < totalPage - 1
    }

    _accumulate(items) {
        this.accumulator = this.accumulator.concat(items)
    }

    _getCurrentReq() {
        let url = this.url
        const param = `start=${this.start}&count=${this.count}`
        if (url.includes('?')) {
            url += '&' + param
        } else {
            url += '?' + param
        }
        this.req.url = url
        return this.req
    }

    _getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }

    _releaseLocker() {
        this.locker = false
    }
}

export {
    Paging
}