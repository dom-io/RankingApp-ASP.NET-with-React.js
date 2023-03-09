import React, { useEffect } from 'react';
import RankGrid from './RankingGrid.js';
import ItemCollection from './ItemCollection.js';

const RankItems = ({ items, setItems, dataType, imgArr, localStorageKey }) => {
    

    function drag(ev) {
        ev.dataTransfer.setData('text', ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.preventDefault();
        const targetEl = ev.target;
        if (targetEl.nodeName === 'IMG') {
            return false;
        }
        if (targetEl.childNodes.length === 0) {
            let data = parseInt(ev.dataTransfer.getData('text').subString(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
            { ...item, ranking: parseInt(targetEl.id.subString(5)) } : { ...item, ranking: item.ranking });
            setItems(transformedCollection);
        }
    }

    useEffect(() => {
        if (items == null) {
            getDataFromApi();
        }
    }, [dataType]);

    function getDataFromApi() {
        fetch(`item/${dataType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }

    useEffect(() => {
        if (items != null) {
        localStorage.setItem(localStorageKey, JSON.stringify(items));
        }
    }, [items])

    return (
        (items != null)?
        <main>
            <RankGrid items={items} imgArr={imgArr} drag={drag} allowDrop={allowDrop} drop={drop} />
            <ItemCollection items={items} drag={drag} imgArr={imgArr} />
            </main>
            : <main>Loading...</main>
        )
}

export default RankItems;