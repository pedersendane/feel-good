import { render } from '@testing-library/react';
import React from 'react'
import FetchDayDetails from '../hooks/fetchApi';

export default function ListContainer(props) {
    const { name } = props.name;
    
        return (
            <FetchDayDetails />
        );
     
}