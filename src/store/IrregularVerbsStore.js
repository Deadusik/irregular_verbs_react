import { makeAutoObservable } from "mobx";

export default class IrregularVerbsStore {
    constructor() {
        const usualColor = '#025000'
        this._verbStore = [
            {
                translate: 'читати',
                colorRarity: usualColor,
                verbs: [
                    {
                        name: 'read',
                        transcription: '[riːd]',
                        soundPath: '',
                        form: 'v1'
                    },
                    {
                        name: 'read',
                        transcription: '[riːd]',
                        soundPath: '',
                        form: 'v2'
                    },
                    {
                        name: 'read',
                        transcription: '[riːd]',
                        soundPath: '',
                        form: 'v3'
                    }
                ]
            },
            {
                translate: 'встановлювати',
                colorRarity: usualColor,
                verbs: [
                    {
                        name: 'set',
                        transcription: '[set]',
                        soundPath: '',
                        form: 'v1'
                    },
                    {
                        name: 'set',
                        transcription: '[set]',
                        soundPath: '',
                        form: 'v2'
                    },
                    {
                        name: 'set',
                        transcription: '[set]',
                        soundPath: '',
                        form: 'v3'
                    }
                ]
            },
            {
                translate: 'бачити',
                colorRarity: usualColor,
                verbs: [
                    {
                        name: 'see',
                        transcription: '[siː]',
                        soundPath: '',
                        form: 'v1'
                    },
                    {
                        name: 'see',
                        transcription: '[siː]',
                        soundPath: '',
                        form: 'v2'
                    },
                    {
                        name: 'see',
                        transcription: '[siː]',
                        soundPath: '',
                        form: 'v3'
                    }
                ]
            }
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