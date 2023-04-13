export class TableVerbItem {
    constructor(translate, colorRarity, verbs) {
        this._translate = translate
        this._colorRarity = colorRarity
        this._verbs = verbs
    }

    get translate() {
        return this._translate
    }

    get colorRarity() {
        return this._colorRarity
    }

    get verbs() {
        return this._verbs
    }
}