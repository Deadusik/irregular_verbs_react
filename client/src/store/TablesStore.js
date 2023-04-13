import { makeAutoObservable } from "mobx";

export default class TablesStore {
    constructor() {
        this._tables = []

        makeAutoObservable(this)
    }

    setTables(tables) {
        this._tables = tables
    }

    pushTable(table) {
        this._tables.concat(table)
    }
}