import React, { useContext, useState } from 'react'
import { InputGroup, Button, Form } from 'react-bootstrap'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { IoRefresh } from "react-icons/io5";


const VerbSearchInput = observer(() => {
    const { irregularVerbs } = useContext(Context)
    const [word, setWord] = useState('')

    const findWordByName = (query) => {
        const foundVerbs = irregularVerbs.verbStore.filter(item => checkVerbItem(item, query))

        return foundVerbs
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

    const searchReset = () => {
        irregularVerbs.setCurrentVerbs(irregularVerbs.verbStore)
    }

    return (
        <InputGroup className="mb-3">
            <Button
                onClick={() => irregularVerbs.setCurrentVerbs(findWordByName(word))}
                variant="outline-secondary"
                id="btnSearch">
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
            <Button
                onClick={searchReset}
                variant="outline-secondary"
                id="btnSearch">
                <IoRefresh />
            </Button>
        </InputGroup>
    )
})

export default VerbSearchInput