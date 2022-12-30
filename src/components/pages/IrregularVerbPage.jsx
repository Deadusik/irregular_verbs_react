import React from 'react'
import IrregularVerbTable from '../irregular_verb_table/IrregularVerbTable';

const IrregularVerbPage = () => {
    const usualColor = '#025000';

    return (
        <>
            <IrregularVerbTable irregularVerbs={
                [
                    {
                        translate: 'читати',
                        colorRarity: usualColor,
                        verbs: [
                            {
                                name: 'read',
                                transcription: '[riːd]',
                                soundPath: ''
                            },
                            {
                                name: 'read',
                                transcription: '[riːd]',
                                soundPath: ''
                            },
                            {
                                name: 'read',
                                transcription: '[riːd]',
                                soundPath: ''
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
                                soundPath: ''
                            },
                            {
                                name: 'set',
                                transcription: '[set]',
                                soundPath: ''
                            },
                            {
                                name: 'set',
                                transcription: '[set]',
                                soundPath: ''
                            }
                        ]
                    }
                ]
            } />
        </>
    )
}

export default IrregularVerbPage;