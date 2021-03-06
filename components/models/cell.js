import {CellStatus} from "../../core/enum";

class Cell {
    title
    status = CellStatus.WAITING

    constructor(spec) {
        this.title = spec.value
        this.id = spec.value_id
    }
}

export {
    Cell
}