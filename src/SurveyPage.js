import React from 'react';
import './App.css';
import axios from 'axios';

class SurveyPage extends React.Component{

    state={
        score:null,
        feedback:null,
        companyname: "groove",
    
    }
    onClick1 = event =>{
        const value = event.target.value;
        this.setState({
            score:value,
        });
    }
    onChangeFeedback = event=>{
        const value = event.target.value;
        this.setState({
            feedback:value
        });
    }

    onClickSubmit = event =>{
        event.preventDefault();
    
        const body = {
            score: this.state.score,
            feedback: this.state.feedback,
            companyname: this.state.companyname
        }
            axios.post('/topic', body)
    
    }
    render(){
        return (
            <div className="container">
                <form>
            <h1>Survey</h1>
            <label>


        </label>
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div class="btn-group mr-2" role="group" aria-label="First group">
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={1}>1</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={2}>2</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={3}>3</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={4}>4</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={5}>5</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={6}>6</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={7}>7</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={8}>8</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={9}>9</button>
    <button type="button" className="btn btn-secondary"  onClick={this.onClick1} value={10}>10</button>
  </div>
</div>


            <div>
                <label onChange={function(event){
                console.log(event);
            }} onClick>We need your feedback</label>
                <input onChange = {this.onChangeFeedback} className="form-control"/>
            </div>
            <div className="text-center">
            <button className="btn btn-primary" onClick={this.onClickSubmit}> Submit</button>
            </div>
            </form>
            </div>
        );
    }
}
export default SurveyPage;
