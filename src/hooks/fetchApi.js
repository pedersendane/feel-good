import React, {
    useState,
    useEffect
} from 'react';
import logo from '../logo.png';
import ListItem from '../components/ListItem';
import axios from 'axios';
/*
changes: "I would like to eat better"
comments: "Overall I had a great day"
createdAt: "2021-05-14T02:23:09.459Z"
diet: false
enough_sleep: true
excercise: true
good_day: true
id: "609ddf0d9ee9c62f75d0fdef"
medicine: true
updatedAt: "2021-05-14T02:23:09.459Z"
wake_up: "7:30"
*/ 
export default function FetchDayDetails(props) {
    const isDane = props.dane;
    const isBreezie = props.breezie;
    const [data, dataSet] = useState();
    const [loading, loadingSet] = useState(true);

    useEffect(() => {
        async function fetchMyAPI() {
            let url;
            if (isDane) {
                 url = 'https://highscore-api.herokuapp.com/day-details'
            } else if (isBreezie) {
                url = 'https://highscore-api.herokuapp.com/breezie-day-details'
                //url = 'http://localhost:9000/breezie-day-details'
            }
            let res = await axios.get(url)
            console.log(res.data);
            dataSet(res.data);
                loadingSet(false);
        }
        fetchMyAPI()
    }, [])
    
    if (loading) {
        return (
            <p>Loading...</p>
          );
    } else {
        return (<ListItem data={data} dane={isDane} breezie={isBreezie}/>);
    }

    
}