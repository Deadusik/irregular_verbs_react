export class Comment {
    constructor(userName, text, dateTime) {
        this._userName = userName
        this._text = text
        this._dateTime = dateTime
    }

    get userName() {
        return this._userName
    }

    get text() {
        return this._text
    }

    get dateTime() {
        return this._dateTime
    }
}