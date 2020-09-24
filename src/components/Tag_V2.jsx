import React, { useState } from 'react';

import useGif from '../useGif';

const Tag = () => {
    const [tag, setTag] = useState('dogs');
    const {gif, fetchGif} = useGif(tag);

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <input value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    );
}

export default Tag;