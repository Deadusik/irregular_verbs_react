import { makeAutoObservable } from "mobx";
import { TableVerbItem } from "../models/TableVerbItem";
import { Verb } from "../models/Verb";

export default class IrregularVerbsStore {
    constructor() {
        const usualColor = '#025000'
        this._verbStore = [
            new TableVerbItem(
                'коштувати',
                usualColor,
                [
                    new Verb('cost', '[kɔst]', 'v1', 'sound'),
                    new Verb('cost', '[kɔst]', 'v2', 'sound'),
                    new Verb('cost', '[kɔst]', 'v3', 'sound')
                ]
            ),
            new TableVerbItem(
                'читати',
                usualColor,
                [
                    new Verb('read', '[riːd]', 'v1', 'sound'),
                    new Verb('read', '[riːd]', 'v2', 'sound'),
                    new Verb('read', '[riːd]', 'v3', 'sound')
                ]
            ),
            new TableVerbItem(
                'встановлювати',
                usualColor,
                [
                    new Verb('set', '[set]', 'v1', 'sound'),
                    new Verb('set', '[set]', 'v2', 'sound'),
                    new Verb('set', '[set]', 'v3', 'sound')
                ]
            ),
            new TableVerbItem(
                'бачити',
                usualColor,
                [
                    new Verb('see', '[siː]', 'v1', 'sound'),
                    new Verb('see', '[siː]', 'v2', 'sound'),
                    new Verb('see', '[siː]', 'v3', 'sound')
                ]
            ),
        ]
        this._currentVerbs = [...this._verbStore]

        makeAutoObservable(this)
    }

    setVerbStore(verbItems) {
        this._verbStore = verbItems
    }

    get verbStore() {
        return this._verbStore
    }

    setCurrentVerbs(verbItems) {
        this._currentVerbs = verbItems
    }

    get currentVerbs() {
        return this._currentVerbs
    }
}