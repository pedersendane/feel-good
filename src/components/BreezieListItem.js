import { render } from '@testing-library/react';
import React from 'react'
import { faThumbsUp, faThumbsDown, faPills, faUtensils, faRunning, faSmile, faClock, faEraser, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BreezieListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        }
        console.log(this.state);
    }
    
    render() {
        const data = this.state.data;
        const getDateString = (d) => {
            var date = new Date(d); 
            var month = date.getMonth() + 1;
            var day = date.getUTCDate();
            var year = date.getFullYear();
            console.log("Month: " + month)
            console.log("Day: " + day)
            console.log("Year: " + year)
            return String(month + '/' + day + '/' + year);
        }
        const newFormButton = (<>
            <div className="text-center py-4 mt-3">
                <button
            className="btn btn-cyan waves-effect waves-light text-center"
            type="button"
                    onClick={function () {
                        document.getElementById('message-container').style.display = 'block';
                        var x = document.getElementById('feel-good-form');
                        x.style.display = 'block';
                        x.scrollIntoView();
                        var y = document.getElementById('previousDays');
                        y.style.display = 'none';
            }}>Submit New Form</button>
            </div>
        </>)
            return (
                <div id="previousDays" style={{ display: 'none' }}>
                    <h2 className="text-center py-4">Previous Days</h2>
                    {newFormButton}
                    
                    {data.map(details => (
                        <div style={{ 'backgroundColor': '#161b22' }} className="card-body py-4 mt-3" key={details.id}>
                    
                    <h2 className="text-center">
                                Date: <i>{
                                    getDateString(details.createdAt.toString()) 
                                }</i>
                            </h2>
                            <h3 className="text-center">Did you make your bed? {details.makeBedBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you stretch? {details.stretchBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you drink enough water? {details.waterBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                        
                            <h3 className="text-center">Did you plan out your day? {details.planDayBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you workout? {details.workoutBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you cook at home? {details.cookBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you read for 10 minutes? {details.readBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you get 10,000 steps? {details.stepsBool.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">How many steps you got: </h3><h5 className="text-center">"{details.steps.toString()}"</h5>
                            <h3 className="text-center"><u>Additional Comments:</u></h3><h5 className="text-center">"{details.comments.toString()}"</h5>

                            <h3 className="text-center"><u>Goals: </u></h3><h5 className="text-center">"{details.changes.toString()}"</h5>

                        </div>
                    ))}
                </div>
            );
        }
    }
     
