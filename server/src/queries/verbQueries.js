const createVerb = (name, transcription, form, soundPath) => {
    return `INSERT INTO "verb" (name, transcription, form, sound_path) `
    + `VALUES ('${name}', '${transcription}', '${form}', '${soundPath}')`
}

const changeTableItemReference = (id) => {
    return `UPDATE "verb" SET table_verb_item_id = ${id}`
}

module.exports = {
    createVerb,
    changeTableItemReference
}