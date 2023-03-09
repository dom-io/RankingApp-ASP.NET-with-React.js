import { useState } from 'react';
import RankItems from './RankItems';

const RankItemsContainer = ({ dataType, imgArr }) => {
    const albumLocalStorageKey = 'albums';
    const movieLocalStorageKey = 'movies';

    let localSotrageKey = '';

    const [albumItems, setAlbumItems] = useState(JSON.parse(localStorage.getItem(albumLocalStorageKey)));
    const [movieItems, setMovieItems] = useState(JSON.parse(localStorage.getItem(movieLocalStorageKey)));

    let data = [];
    let setFunc = null;

    if (dataType === 1) {
        data = movieItems;
        setFunc = setMovieItems;
        localSotrageKey = movieLocalStorageKey;
    } else if (dataType === 2) {
        data = albumItems;
        setFunc = setAlbumItems;
        localSotrageKey = albumLocalStorageKey
    }

    return (
        <RankItems items={data} setItems={setFunc} dataType={dataType} imgArr={imgArr} localSotrageKey={localSotrageKey} />
        )
}

export default RankItemsContainer;