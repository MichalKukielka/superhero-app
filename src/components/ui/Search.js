import React, { useState } from 'react';

function Search({ getQuery }) {
    const [text, setText] = useState('');
    const onChange = (query) => {
        setText(query);
        getQuery(query);
    }

    return (
        <div className='search'> 
            <form>
                <input 
                    type='text' 
                    className='form-control' 
                    placeholder='Search your favorite hero...' 
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus/>
            </form>
        </div>
    );
}

export default Search
