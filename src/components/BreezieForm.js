import React from 'react';
import { faPencilAlt, faWater, faRunning, faCalendarPlus, faWalking, faCookieBite, faBook, faBed, faWeight, faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BreezieForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        water: '',
        waterBool: false,
        stretch: '',
        stretchBool: false,
        planDay: '',
        planDayBool: false,
        workout: '',
        workoutBool: false,
        steps: '',
        stepsBool: false,
        cook: '',
        cookBool: false,
        read: '',
        readBool: false,
        makeBed: '',
        makeBedBool: false,
        changes: '',
        comments: '',
        success: '',
          failure: ''
      };
      this.water = this.water.bind(this);
      this.waterBool = this.waterBool.bind(this);
      this.stretch = this.stretch.bind(this);
      this.stretchBool = this.stretchBool.bind(this);
      this.planDay = this.planDay.bind(this);
      this.planDayBool = this.planDayBool.bind(this);
      this.workout = this.workout.bind(this);
      this.workoutBool = this.workoutBool.bind(this);
      this.steps = this.steps.bind(this);
      this.stepsBool = this.stepsBool.bind(this);
      this.cook = this.cook.bind(this);
      this.cookBool = this.cookBool.bind(this);
      this.read = this.read.bind(this);
      this.readBool = this.readBool.bind(this);
      this.makeBed = this.makeBed.bind(this);
      this.makeBedBool = this.makeBedBool.bind(this);
      this.commentsBreezie = this.commentsBreezie.bind(this);
      this.changesBreezie = this.changesBreezie.bind(this);
      this.submitBreezie = this.submitBreezie.bind(this);
      this.cancelBreezie = this.cancelBreezie.bind(this);
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

    water(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        water: stateValue
      });
    };
    stretch(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        stretch: stateValue
      });
    };
    planDay(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        planDay: stateValue
      });
    };
    workout(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        workout: stateValue
      });
    };
    steps(props) {
      const stateValue = props.target.value;
      this.setState({
        steps: stateValue
      });
      console.log(this.state);
    };
    cook(props) {
      const stateValue = props.target.value;
      this.setState({
        cook: stateValue
      });
    };
    read(props) {
      const stateValue = props.target.value;
      this.setState({
        read: stateValue
      });
    };
    makeBed(props) {
      const stateValue = props.target.value;
      this.setState({
        makeBed: stateValue
      });
    };
    waterBool(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        waterBool: stateValue
      });
    };
    stretchBool(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        stretchBool: stateValue
      });
    };
    planDayBool(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        planDayBool: stateValue
      });
    };
    workoutBool(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        workoutBool: stateValue
      });
    };
    stepsBool(props) {
      const stateValue = props.target.value;
      this.updateStyling(props);
      this.setState({
        stepsBool: stateValue
      });
      console.log(this.state);
    };
    cookBool(props) {
        const stateValue = props.target.value;
        this.updateStyling(props);
      this.setState({
        cookBool: stateValue
      });
    };
    readBool(props) {
        const stateValue = props.target.value;
        this.updateStyling(props);
      this.setState({
        readBool: stateValue
      });
    };
    makeBedBool(props) {
        const stateValue = props.target.value;
        this.updateStyling(props);
      this.setState({
        makeBedBool: stateValue
      });
    };
    commentsBreezie(props) {
      this.setState({
        comments: props.target.value
      });
    };
    changesBreezie(props) {
      this.setState({
        changes: props.target.value
      });
    };

    cancelBreezie(props) {
      this.setState({
        water: '',
        waterBool: false,
        stretch: '',
        stretchBool: false,
        planDay: '',
        planDayBool: false,
        workout: '',
        workoutBool: false,
        steps: '',
        stepsBool: false,
        cook: '',
        cookBool: false,
        read: '',
        readBool: false,
        makeBed: '',
        makeBedBool: false,
        changes: '',
        comments: '',
        success: '',
        failure: '',
      });
      var x = document.getElementById('feel-good-form');
      x.style.display = 'none';
      document.getElementById('previousDays').style.display = 'none';
      document.getElementById('message-container').style.display = 'none';
      document.getElementById('topButtonsContainer').style.display = 'block';
    }
  
    submitBreezie(e) {
      e.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      var urlencoded = new URLSearchParams();
      urlencoded.append("water", this.state.water);
      urlencoded.append("waterBool", this.state.waterBool);
      urlencoded.append("stretch", this.state.stretch);
      urlencoded.append("stretchBool", this.state.stretchBool);
      urlencoded.append("planDay", this.state.planDay);
      urlencoded.append("planDayBool", this.state.planDayBool);
      urlencoded.append("workout", this.state.workout);
      urlencoded.append("workoutBool", this.state.workoutBool);
      urlencoded.append("steps", this.state.steps);
      urlencoded.append("stepsBool", this.state.stepsBool);
      urlencoded.append("cook", this.state.cook);
      urlencoded.append("cookBool", this.state.cookBool);
      urlencoded.append("read", this.state.read);
      urlencoded.append("readBool", this.state.readBool);
      urlencoded.append("makeBed", this.state.makeBed);
      urlencoded.append("makeBedBool", this.state.makeBedBool);
      urlencoded.append("changes", this.state.changes);
      urlencoded.append("comments", this.state.comments);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      };

      //fetch("https://highscore-api.herokuapp.com/breezie-day-details/", requestOptions)
      fetch("http://localhost:9000/breezie-day-details/", requestOptions)
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
      const buttons = (<div className="text-center py-4 mt-3">
        <button
          className="btn btn-cyan waves-effect waves-light text-center"
          type="button"
          onClick={
            function (e) {
              document.getElementById('message-container').style.display = 'block';
              var x = document.getElementById('feel-good-form');
              x.style.display = 'initial';
              x.scrollIntoView();
              var y = document.getElementById('previousDays');
              y.style.display = 'none';
              var z = document.getElementById('topButtonsContainer');
              z.style.display = 'none';
            }
          }>Submit New Form</button>
      
        <button
          className="btn btn-cyan waves-effect waves-light text-center"
          type="button"
          onClick={
            function (e) {
              var x = document.getElementById('previousDays');
              x.style.display = 'block';
              x.scrollIntoView();
              var y = document.getElementById('feel-good-form');
              y.style.display = 'none';
              var z = document.getElementById('topButtonsContainer');
              z.style.display = 'none';
            }
          }>View Previous Days</button>
      </div>)

      return (
        <>
      <div id="topButtonsContainer">
        <h2 className="text-center py-4">FeelGood Forms</h2>
          {buttons}
          </div>
        <div className="card-body" id="message-container" style={{ display: 'none' }}>
        <h1 className="text-center">New FeelGood Form</h1>
          <div className="text-center success" id="success-message">
            <h2>{this.state.success}</h2>
            <div className="text-center py-4 mt-3">
            <button id="home-button" style={{display: 'none'}} className="btn btn-green waves-effect waves-light" type="button" onClick={function (){
              window.location.href = '/feel-good'
              }}>Home</button>
              </div>
          </div>
        <div className="text-center failure" id="failure-message"><h1>{this.state.failure}</h1></div>

                  <form id="feel-good-form" style={{ 'display': 'none' }} onSubmit={this.submitBreezie}>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faWater} size={'lg'} />
            <label className="font-weight-light">&nbsp;Did you drink enough water?</label>
          </div>
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.waterBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.waterBool}>No</button>
                      </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faWalking} size={'lg'} />
            <label className="font-weight-light">&nbsp;Did you stretch?</label>
          </div>
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.stretchBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.stretchBool}>No</button>
                      </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faCalendarPlus} size={'lg'} />
            <label className="font-weight-light">&nbsp;Did you take time to plan out your day?</label>
            </div>
                      
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.planDayBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.planDayBool}>No</button>
                      </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faWeight} size={'lg'} />
            <label className="font-weight-light">&nbsp;Did you workout?</label>
            </div>
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.workoutBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.workoutBool}>No</button>
            </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faCookieBite} size={'lg'} />
            <label className="font-weight-light">&nbsp;Have you been cooking more at home?</label>
          </div>
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.cookBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.cookBool}>No</button>
                      </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faBook} size={'lg'} />
            <label className="font-weight-light">&nbsp;Did you read at least 10 minutes?</label>
          </div>
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.readBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.readBool}>No</button>
            </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faBed} size={'lg'} />
            <label className="font-weight-light">&nbsp;Did you make your bed this morning?</label>
          </div>
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.makeBedBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.makeBedBool}>No</button>
                      </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faWalking} size={'lg'} />
            <label className="font-weight-light">&nbsp;Did you get 10,000 Steps?</label>
          </div>
          <div className="text-center py-4">
            <button className="btn btn-green waves-effect waves-light" type="button" value={true} onClick={this.stepsBool}>Yes</button>
            <button className="btn btn-red waves-effect waves-light" type="button" value={false} onClick={this.stepsBool}>No</button>
          </div>

          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faWalking} size={'lg'} />
            <label className="font-weight-light">&nbsp;How many steps did you get?</label>
            <div className="md-form">
              <input type="text" id="materialFormCardEmailEx" className="form-control" value={this.state.steps} onChange={this.steps}/>
            </div>
        </div>
                      
          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faPencilAlt} size={'lg'} />
            <label className="font-weight-light">&nbsp;Any Comments?</label>
            <div className="md-form">
              <input type="text" id="materialFormCardEmailEx" className="form-control" value={this.state.comments} onChange={this.commentsBreezie}/>
            </div>
          </div>

          <div className="text-center ">
            <FontAwesomeIcon className="fa fa-user prefix grey-text" icon={faCheck} size={'lg'} />
            <label className="font-weight-light">&nbsp;Any goals to work towards?</label>
            <div className="md-form">
              <input type="text" id="materialFormCardEmailEx" className="form-control" value={this.state.changes} onChange={this.changesBreezie}/>
            </div>
          </div>

          <div className="text-center py-4 mt-3">
            <button className="btn btn-cyan waves-effect waves-light" type="button" onClick={this.submitBreezie}>Submit</button>
            <button className="btn btn-cyan waves-effect waves-light" type="button" onClick={this.cancelBreezie}>Cancel</button>

            </div>
        </form>
        </div>
        </>
      );
    
  }
};


