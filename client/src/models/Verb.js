export class Verb {
    constructor(name, transcription, form, soundPath) {
        this._name = name
        this._transcription = transcription
        this._form = form
        this._soundPath = soundPath
    }

    get name() {
        return this._name
    }

    get transcription() {
        return this._transcription
    }

    get form() {
        return this._form
    }

    get soundPath() {
        return this._soundPath
    }
}