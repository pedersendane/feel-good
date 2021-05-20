import { render } from '@testing-library/react';
import React from 'react'
import FetchDayDetails from '../hooks/fetchApi';

export default function ListContainer(props) {
    const user  = props.user;
    const isDane = user.email === "pedersen.dane@outlook.com";
    const isBreezie = user.email === "bree1224@yahoo.com";
        return (
            <FetchDayDetails dane={isDane} breezie={isBreezie}/>
        );
}