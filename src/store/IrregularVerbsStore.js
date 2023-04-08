import { makeAutoObservable } from "mobx";

export default class IrregularVerbsStore {
    constructor() {
        const usualColor = '#025000'
        this._verbItems = [
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

        makeAutoObservable(this)
    }

    setVerbItem(verbItem) {
        this._verbItems.push(verbItem)
    }

    get verbItems() {
        return this._verbItems
    }
}