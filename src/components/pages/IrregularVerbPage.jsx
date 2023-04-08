import React from 'react'
import IrregularVerbTable from '../irregular_verbs_table/IrregularVerbsTable';
import { Container } from 'react-bootstrap';
import VerbSearchInput from '../table_controller/VerbSerachInput';

const IrregularVerbPage = () => {
    const usualColor = '#025000';

    return (
        <Container>
            <VerbSearchInput />

            <IrregularVerbTable irregularVerbs={
                [
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
                    }
                ]
            } />
        </Container>
    )
}

export default IrregularVerbPage;