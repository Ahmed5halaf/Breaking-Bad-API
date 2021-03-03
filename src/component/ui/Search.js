import React, {useState} from 'react'

const Search = ({getQuery}) => {
    const [text , setTExt] = useState('')

        const onChange = (q) => {
            setTExt(q)
            getQuery(q)
        }

    return (
        <section className='search'>
            <form>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Search charaters"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search

