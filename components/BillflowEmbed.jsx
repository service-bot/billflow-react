import React from 'react'
import useBillflowEmbed from '../hooks/useBillflowEmbed.js'

export default function BillflowEmbed({settings}) {

    useBillflowEmbed({settings})

    return (
        <div id="billflow-embed"/>
    )
}
