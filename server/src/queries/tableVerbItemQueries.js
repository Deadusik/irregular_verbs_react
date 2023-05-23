const createTableVerbItem = (translate, colorRarity) => {
    return `INSERT INTO "table_verb_item" (translate, color_rarity) `
    + `VALUES ('${translate}', '${colorRarity}')`
}

module.exports = {
    createTableVerbItem
}