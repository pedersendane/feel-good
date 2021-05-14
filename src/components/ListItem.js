import { render } from '@testing-library/react';
import React from 'react'
import { faThumbsUp, faThumbsDown, faPills, faUtensils, faRunning, faSmile, faClock, faEraser, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListItem(props) {
    const data = props.data;
        return (
            <div id="previousDays" style={{display: 'none'}}>
                <h2 class="text-center py-4">Previous Days</h2>
                {data.map(details => (
                <div style={{'backgroundColor': '#161b22'}} class="card-body py-4 mt-3" key={details.id}>
                    
                        <h2 className="text-center">
                            Date: <i>{
                                new Date(details.createdAt.toString()).getMonth() + '/'
                                + new Date(details.createdAt.toString()).getUTCDate() + '/'
                                + new Date(details.createdAt.toString()).getFullYear()
                            }</i>
                        </h2>
                        <h3 className="text-center">Overall: {details.good_day.toString() === 'true' ?
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsUp} size={'lg'} /> :
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsDown} size={'lg'} />
                        }</h3>
                        
                        <h3 className="text-center">Enough Sleep? {details.enough_sleep.toString() === 'true' ?
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsUp} size={'lg'} /> :
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsDown} size={'lg'} />
                        }</h3>
                        <h3 className="text-center">Did you take your medicine? {details.medicine.toString() === 'true' ?
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsUp} size={'lg'} /> :
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsDown} size={'lg'} />
                        }</h3>
                        <h3 className="text-center">Did you try to eat healthy? {details.diet.toString() === 'true' ?
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsUp} size={'lg'} /> :
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsDown} size={'lg'} />
                        }</h3>
                        <h3 className="text-center">Did you excercise? {details.excercise.toString() === 'true' ?
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsUp} size={'lg'} /> :
                            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faThumbsDown} size={'lg'} />
                        }</h3>
                        <h3 className="text-center">Changes I would Like to make: </h3><h5 className="text-center">"{details.changes.toString()}"</h5> 
                        
                        
                        <h3 className="text-center">Additional Comments: </h3><h5 className="text-center">"{details.comments.toString()}"</h5> 

                    </div>
                ))}
            </div>
        );
     
}