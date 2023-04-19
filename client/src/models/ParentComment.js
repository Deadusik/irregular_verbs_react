export class ParentComment {
    constructor(comment, childComments = []) {
        this._comment = comment
        this._childComments = childComments
    }

    get comment() {
        return this._comment
    }

    get childComments() {
        return this._childComments
    }
}