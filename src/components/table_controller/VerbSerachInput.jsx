import React, { useContext, useState } from 'react'
import { InputGroup, Button, Form } from 'react-bootstrap'
import { Context } from '../../index'


const VerbSearchInput = () => {
    const { irregularVerbs } = useContext(Context)
    const [word, setWord] = useState('')

    const findWordByName = (query) => {
        const foundVerbItems = irregularVerbs.verbItems.filter(item => checkVerbItem(item, query))

        console.log(foundVerbItems)
        return foundVerbItems
    }

    // return true if translate or verb name equal query
    const checkVerbItem = (verbItem, query) => {
        if (cutByLength(verbItem.translate, query.length) === query.toLowerCase())
            return true
        else if (verbItem.verbs.filter(verb =>
            cutByLength(verb.name.toLowerCase(), query.length) === query.toLowerCase()).length > 0)
            return true

        return false
    }

    const cutByLength = (word, length) => {
        if (length < word.length) {
            return word.slice(0, length)
        }
        return word
    }

    return (
        <InputGroup className="mb-3">
            <Button onClick={() => findWordByName(word)} variant="outline-secondary" id="btnSearch">
                Пошук
            </Button>
            <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder='Знайти слово'
                onChange={e =>
                    setWord(e.target.value)
                }
            />
        </InputGroup>
    )
}

export default VerbSearchInput