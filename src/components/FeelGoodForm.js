import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import axios from 'axios';
import { faBed, faPills, faUtensils, faRunning, faSmile, faClock, faEraser, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class FeelGoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enough_sleep: false,
      medicine: false,
      diet: false,
      excercise: false,
      good_day: false,
      wake_up: '',
      changes: '',
      comments: '',
      success: '',
      failure: '',
    };
    this.enoughSleep = this.enoughSleep.bind(this);
    this.medicine = this.medicine.bind(this);
    this.diet = this.diet.bind(this);
    this.excercise = this.excercise.bind(this);
    this.goodDay = this.goodDay.bind(this);
    this.wakeUp = this.wakeUp.bind(this);
    this.changes = this.changes.bind(this);
    this.comments = this.comments.bind(this);
    this.submit = this.submit.bind(this);
  }
  updateStyling(props) {
    console.log(props);
    var prevSibling = props.target.previousElementSibling ? props.target.previousElementSibling : null;
    var nextSibling = props.target.nextElementSibling ? props.target.nextElementSibling : null;

    if (prevSibling) {
      prevSibling.classList.remove('activeButton');
      prevSibling.style.color = '';
      prevSibling.style.removeProperty('border-color');
    } else if (nextSibling) {
      nextSibling.classList.remove('activeButton');
      nextSibling.style.color = '';
      nextSibling.style.removeProperty('border-color');
    }

    props.target.classList.add('activeButton');
    props.target.style.color = 'white';
    props.target.style.borderColor = 'white';
  }

  enoughSleep(props) {
    const stateValue = props.target.value;
    this.updateStyling(props);
    this.setState({
      enough_sleep: stateValue
    });
  };

  medicine(props) {
    const stateValue = props.target.value;
    this.updateStyling(props);
    this.setState({
      medicine: stateValue
    });
  };
  diet(props) {
    const stateValue = props.target.value;
    this.updateStyling(props);
    this.setState({
      diet: stateValue
    });
  };
  excercise(props) {
    const stateValue = props.target.value;
    this.updateStyling(props);
    this.setState({
      excercise: stateValue
    });
  };
  goodDay(props) {
    const stateValue = props.target.value;
    this.updateStyling(props);
    this.setState({
      good_day: stateValue
    });
    console.log(this.state);
  };
  wakeUp(props) {
    const stateValue = props.target.value;
    this.setState({
      wake_up: stateValue
    });
  };

  changes(props) {
    const stateValue = props.target.value;
    this.setState({
      changes: stateValue
    });
  };

  comments(props) {
    this.setState({
      comments: props.target.value
    });
  };
  
  submit(e) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("enough_sleep", this.state.enough_sleep);
    urlencoded.append("wake_up", this.state.wake_up);
    urlencoded.append("medicine", this.state.medicine);
    urlencoded.append("excercise", this.state.excercise);
    urlencoded.append("diet", this.state.diet);
    urlencoded.append("comments", this.state.comments);
    urlencoded.append("changes", this.state.changes);
    urlencoded.append("good_day", this.state.good_day);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch("https://highscore-api.herokuapp.com/day-details/", requestOptions)
      .then(response => {
        if (response.ok) {
          console.log(response);
          this.setState({
            success: 'Successfully Posted Your Update. Click here to return home'
          });
          var x = document.getElementById('success-message');
          x.scrollIntoView();
          var y = document.getElementById('home-button');
          y.style.display = 'initial';
          var form = document.getElementById('feel-good-form');
          form.style.display = 'none';
        } else {
          this.setState({
            failure: 'There was an error'
          })
          var y = document.getElementById('home-button');
          y.style.display = 'initial';
        }
      })
      .catch(error => {
        console.log('error', error);
        this.setState({
          failure: error.message
        });
        var x = document.getElementById('failure-message');
        x.scrollIntoView();
        var y = document.getElementById('home-button');
          y.style.display = 'initial';
        var form = document.getElementById('feel-good-form');
        form.style.display = 'none';
      });
  }

  render() {
    return (
      <>
        <h2 class="text-center py-4">FeelGood Forms</h2>
        <div class="text-center py-4 mt-3">
      <button
          class="btn btn-cyan waves-effect waves-light text-center"
          type="button"
          onClick={
          function (e) {
            document.getElementById('feel-good-form').style.display = 'block';
            document.getElementById('previousDays').style.display = 'none';
          }
        }>Submit New Form</button>
          
           <button
          class="btn btn-cyan waves-effect waves-light text-center"
          type="button"
          onClick={
          function (e) {
            document.getElementById('feel-good-form').style.display = 'none';
            document.getElementById('previousDays').style.display = 'block';
          }
        }>View Previous Days</button>
        </div>
        
      <div class="card-body">
        

          <div className="text-center" style={{ color: '#13aa52' }} id="success-message">
            <h1>{this.state.success}</h1>
            <div class="text-center py-4 mt-3">
            <button id="home-button" style={{display: 'none'}} class="btn btn-green waves-effect waves-light" type="button" onClick={function (){
              window.location.href = '/feel-good'
              }}>Home</button>
              </div>

          </div>
        <div className="text-center" id="failure-message"><h1>{this.state.failure}</h1></div>

        <form id="feel-good-form" style={{'display': 'none'}} onSubmit={this.submit}>
          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faBed} size={'lg'} />
            <label class="font-weight-light">&nbsp;Enough Sleep?</label>
          </div>
          <div class="text-center py-4">
            <button class="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.enoughSleep}>Yes</button>
            <button class="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.enoughSleep}>No</button>
          </div>

          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faPills} size={'lg'} />
            <label class="font-weight-light">&nbsp;Did you take your medicine?</label>
          </div>
          <div class="text-center py-4">
            <button class="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.medicine} >Yes</button>
            <button class="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.medicine} >No</button>
          </div>

          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faUtensils} size={'lg'} />
            <label class="font-weight-light">&nbsp;Did you eat healthier?</label>
          </div>
          <div class="text-center py-4">
            <button class="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.diet}>Yes</button>
            <button class="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.diet}>No</button>
          </div>

          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faRunning} size={'lg'} />
            <label class="font-weight-light">&nbsp;Did you excercise?</label>
          </div>
          <div class="text-center py-4">
            <button class="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.excercise}>Yes</button>
            <button class="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.excercise}>No</button>
          </div>

          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faSmile} size={'lg'} />
            <label class="font-weight-light">&nbsp;Did you have a good day?</label>
          </div>
          <div class="text-center py-4">
            <button class="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.goodDay}>Yes</button>
            <button class="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.goodDay}>No</button>
          </div>

          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faClock} size={'lg'} />
            <label class="font-weight-light">&nbsp;What time did you wake up?</label>
            <div class="md-form">
              <input type="text" id="materialFormCardEmailEx" class="form-control" value={this.state.wake_up} onChange={this.wakeUp} />
            </div>
          </div>

          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faEraser} size={'lg'} />
            <label class="font-weight-light">&nbsp;List any changes you would like to make to your day:</label>
            <div class="md-form">
              <input type="text" id="materialFormCardEmailEx" class="form-control" value={this.state.changes} onChange={this.changes}/>
            </div>
          </div>

          <div class="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faComment} size={'lg'} />
            <label class="font-weight-light">&nbsp;Additional Comments: </label>
            <div class="md-form">
              <input type="text" id="materialFormCardEmailEx" class="form-control" value={this.state.comments} onChange={this.comments}/>
            </div>
          </div>

          <div class="text-center py-4 mt-3">
            <button class="btn btn-cyan waves-effect waves-light" type="button" onClick={this.submit}>Submit</button>
          </div>
        </form>
        </div>
        </>
    );
  }
};


