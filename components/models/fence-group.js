import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skuList
    fences=[]

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    initFence() {
        this._initFence()
    }

    _initFence() {
        const matrix = this._creatMatrix(this.skuList)
        const fences = []
        const AT = matrix.transpose()
        AT.forEach(r=>{
            const fence = new Fence(r)
            fence.init()
            fences.push(fence)
        })
        this.fences = fences
        return fences
    }

    _creatMatrix(skuList) {
        const m = []
        skuList.forEach(sku=>{
            return m.push(sku.specs)
        })
        return new Matrix(m)
    }
}

export {
    FenceGroup
}