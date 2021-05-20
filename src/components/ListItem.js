import React from 'react'
import BreezieListItem from './BreezieListItem';
import DaneListItem from './DaneListItem';

function ListItem(props) {
    const data = props.data;
    const isDane = props.dane;
    const isBreezie = props.breezie;
    console.log(data);
    let items;
    if (isDane) {
        items = <DaneListItem data={data}/>
    } else if (isBreezie) {
        items = <BreezieListItem data={data}/>
    }
    return (
        items
    )
}

export default ListItem
