import { render } from '@testing-library/react';
import React from 'react'
import { faThumbsUp, faThumbsDown, faPills, faUtensils, faRunning, faSmile, faClock, faEraser, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DaneListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            badDaysOnly: false,
            goodDaysOnly: false,
        }
        this.badDaysOnly = this.badDaysOnly.bind(this);
        this.goodDaysOnly = this.goodDaysOnly.bind(this);
        this.allDays = this.allDays.bind(this);
    }
    badDaysOnly(event) {
        this.setState({
            badDaysOnly: true,
            goodDaysOnly: false
        })
        console.log(event.target);
        event.target.scrollIntoView();
    }
    goodDaysOnly(event) {
        this.setState({
            goodDaysOnly: true,
            badDaysOnly: false
        })
        console.log(this.state);
    }
    allDays(event) {
        this.setState({
            goodDaysOnly: false,
            badDaysOnly: false
        })
        console.log(this.state);
    }
    render() {
        const data = this.state.data;
        const badDays = this.state.data.filter(day => day.good_day.toString() === 'false');
        const goodDays = this.state.data.filter(day => day.good_day.toString() === 'true');
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
        
        const allDaysTab = (
            this.state.goodDaysOnly === false && this.state.badDaysOnly === false ?
                <a className="nav-link active" aria-current="page" onClick={this.allDays}>All Days</a>
                :
                <a className="nav-link" onClick={this.allDays}>All Days</a>
        )
        const goodDaysTab = (
            this.state.goodDaysOnly === true && this.state.badDaysOnly === false ?
            <a className="nav-link active" aria-current="page" onClick={this.goodDaysOnly}>Good Days</a>
            :
            <a className="nav-link" onClick={this.goodDaysOnly}>Good Days</a>
        )
        const badDaysTab = (
            this.state.badDaysOnly === true && this.state.goodDaysOnly === false ?
            <a className="nav-link active" aria-current="page" onClick={this.badDaysOnly}>Bad Days</a>
            :
            <a className="nav-link" onClick={this.badDaysOnly}>Bad Days</a>
        )
       
        if (this.state.badDaysOnly) {
            return (
                <div id="previousDays" style={{ display: 'none' }}>
                    <h2 className="text-center py-4">Previous Days</h2>
                    {newFormButton}
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            {allDaysTab}
                        </li>
                        <li className="nav-item">
                            {goodDaysTab}
                        </li>
                        <li className="nav-item">
                            {badDaysTab}
                        </li>
                    </ul>
                    {badDays.map(details => (
                        <div style={{ 'backgroundColor': '#161b22' }} className="card-body py-4 mt-3" key={details.id}>
                    
                    <h2 className="text-center">
                                Date: <i>{
                                    getDateString(details.createdAt.toString()) 
                                }</i>
                            </h2>
                            <h3 className="text-center">Overall: {details.good_day.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                        
                            <h3 className="text-center">Enough Sleep? {details.enough_sleep.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you take your medicine? {details.medicine.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you try to eat healthy? {details.diet.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you excercise? {details.excercise.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Changes I would Like to make: </h3><h5 className="text-center">"{details.changes.toString()}"</h5>
                        
                        
                            <h3 className="text-center">Additional Comments: </h3><h5 className="text-center">"{details.comments.toString()}"</h5>

                        </div>
                    ))}
                </div>
            )
        } else if (this.state.goodDaysOnly) {
            return (
                <div id="previousDays" style={{ display: 'none' }}>
                    <h2 className="text-center py-4">Previous Days</h2>
                    {newFormButton}
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            {allDaysTab}
                        </li>
                        <li className="nav-item">
                            {goodDaysTab}
                        </li>
                        <li className="nav-item">
                            {badDaysTab}
                        </li>
                    </ul>
                    {goodDays.map(details => (
                        <div style={{ 'backgroundColor': '#161b22' }} className="card-body py-4 mt-3" key={details.id}>
                    
                    <h2 className="text-center">
                                Date: <i>{
                                    getDateString(details.createdAt.toString()) 
                                }</i>
                            </h2>
                            <h3 className="text-center">Overall: {details.good_day.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                        
                            <h3 className="text-center">Enough Sleep? {details.enough_sleep.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you take your medicine? {details.medicine.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you try to eat healthy? {details.diet.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you excercise? {details.excercise.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Changes I would Like to make: </h3><h5 className="text-center">"{details.changes.toString()}"</h5>
                        
                        
                            <h3 className="text-center">Additional Comments: </h3><h5 className="text-center">"{details.comments.toString()}"</h5>

                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div id="previousDays" style={{ display: 'none' }}>
                    <h2 className="text-center py-4">Previous Days</h2>
                    {newFormButton}
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            {allDaysTab}
                        </li>
                        <li className="nav-item">
                            {goodDaysTab}
                        </li>
                        <li className="nav-item">
                            {badDaysTab}
                        </li>
                    </ul>
                    {data.map(details => (
                        <div style={{ 'backgroundColor': '#161b22' }} className="card-body py-4 mt-3" key={details.id}>
                    
                    <h2 className="text-center">
                                Date: <i>{
                                    getDateString(details.createdAt.toString()) 
                                }</i>
                            </h2>
                            <h3 className="text-center">Overall: {details.good_day.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                        
                            <h3 className="text-center">Enough Sleep? {details.enough_sleep.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you take your medicine? {details.medicine.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you try to eat healthy? {details.diet.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Did you excercise? {details.excercise.toString() === 'true' ?
                                <FontAwesomeIcon className="fa fa-user prefix success" icon={faThumbsUp} size={'lg'} /> :
                                <FontAwesomeIcon className="fa fa-user prefix failure" icon={faThumbsDown} size={'lg'} />
                            }</h3>
                            <h3 className="text-center">Changes I would Like to make: </h3><h5 className="text-center">"{details.changes.toString()}"</h5>
                        
                        
                            <h3 className="text-center">Additional Comments: </h3><h5 className="text-center">"{details.comments.toString()}"</h5>

                        </div>
                    ))}
                </div>
            );
        }
    }
     
}