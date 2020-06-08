class Matrix {
    m
    constructor(matrix) {
        this.m = matrix
    }

    getRowsNum() {
        return this.m.length
    }

    getColsNum() {
        return this.m[0].length
    }

    transpose() {
        const desArr = []
        for (let j=0;j<this.getColsNum();j++) {
            desArr[j] = []
            for (let i=0;i<this.getRowsNum();i++) {
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }
}

export {
    Matrix
}