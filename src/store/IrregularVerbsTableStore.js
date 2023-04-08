import { makeAutoObservable } from "mobx";

export default class IrregularVerbsTableStore {
    constructor() {
        this._isHideTranslateCol = false
        this._isHideV1Col = false
        this._isHideV2Col = false
        this._isHideV3Col = false

        makeAutoObservable(this)
    }

    setIsHideTranslateCol(isHide) {
        this._isHideTranslateCol = isHide
    }

    setIsHideV1Col(isHide) {
        this._isHideV1Col = isHide
    }

    setIsHideV2Col(isHide) {
        this._isHideV2Col = isHide
    }

    setIsHideV3Col(isHide) {
        this._isHideV3Col = isHide
    }

    get isHideTranslateCol() {
        return this._isHideTranslateCol
    }

    get isHideV1Col() {
        return this._isHideV1Col
    }

    get isHideV2Col() {
        return this._isHideV2Col
    }

    get isHideV3Col() {
        return this._isHideV3Col
    }
}