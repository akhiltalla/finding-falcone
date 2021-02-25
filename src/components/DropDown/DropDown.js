import React, { Component } from 'react';
import { connect } from 'react-redux';
import './dropdown.css';

class DropDown extends Component {
    constructor(props){
        super(props);
        this.state={
            dropDownSelectedValue: null,
            radioSelectedValue: null
        }
    }

    handleChange = (e)=>{
        if(e.target.value!==this.state.dropDownSelectedValue){
            let fArray = this.props.finalArray;
            if(fArray.some(item=>item.name===this.props.name)){
                let index;
                for(let i=0;i<fArray.length;i++){
                    if(fArray[i].name===this.props.name){
                        index = i;
                    }
                }
            fArray.splice(index,1);
            this.props.updateFinalArray(fArray);
            this.setState({radioSelectedValue: null}) 
            this.props.calculateTime(this.props.finalArray);
        }}
        this.setState({ dropDownSelectedValue: e.target.value })
    }
    
    radioHandler = (e)=>{
        let {vehicles, planets} = this.props;
        let distance = ((planets.filter(planet=>planet.name===this.state.dropDownSelectedValue))
                        .map(item => item.distance))[0];
        let max_distance = ((vehicles.filter(vehicle=>vehicle.name===e.target.value)
                        .map(item => item.max_distance)))[0];
        let speed = ((vehicles.filter(vehicle=>vehicle.name===e.target.value)
                    .map(item => item.speed)))[0];

        if(max_distance >= distance){
            this.setState({radioSelectedValue: e.target.value});
            let obj = {
                    name: this.props.name,
                    vehicle_name: e.target.value,
                    vehicle_speed: speed,
                    distance: distance,
                    planet_name: this.state.dropDownSelectedValue
                }
            let fArray = this.props.finalArray;
            if(fArray.some(person=>person.name===this.props.name)){
                let index;
                for(let i=0;i<fArray.length;i++){
                    if(fArray[i].name===this.props.name){
                        index = i;
                    }
                }
                fArray[index] = obj;
            }
            else{
                fArray.push(obj);
            }
            this.props.updateFinalArray(fArray);
            this.props.calculateTime(this.props.finalArray);
        }
        else{
            alert("can't select this one");
        }
    }

    createDropDown = (data)=>{
        let elements = data.map((item, index) => {
            return (
                <option key={index}>{item.name}</option>
            )
        })
        return elements;
    }

    createRadioList = (data)=>{
        let elements = data.map((item, index) => {
            return (
                <li key={index}>
                    <input type='radio' name={this.props.name} value={item.name} checked={item.name===this.state.radioSelectedValue} onChange={e => this.radioHandler(e)} />
                    <label>{item.name} ({item.total_no})</label>
                </li>  
            )
        });
        return elements;
    }

    render() {
        console.log('render of dropdown');
        return (
            <React.Fragment>
                <select className='drop-down-list' onChange={e => this.handleChange(e)}>
                    <option>select</option>
                    {this.createDropDown(this.props.planets)}
                </select>
                <div className='radio-container'>
                    <ul>
                        {this.state.dropDownSelectedValue!=='select' && this.state.dropDownSelectedValue?
                        this.createRadioList(this.props.vehicles)
                        :null}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return ({
        finalArray: state.finalArray
    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        updateFinalArray: data=>dispatch({type:'UPDATE_ARRAY', payload: data})
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
