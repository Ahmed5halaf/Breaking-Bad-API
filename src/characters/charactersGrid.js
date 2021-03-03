import React from 'react'
import CharactersItem from './charactersItem'
import Spinner from '../component/ui/Spinner'

const charactersGrid = ({items , isLoding}) => {
    return isLoding ? (

    <Spinner/>

    ) : (<section className="cards">
        {items.map(item => (
            <CharactersItem key={item.char_id} item={item}></CharactersItem>
        ))}
    </section>
    )
}

export default charactersGrid

