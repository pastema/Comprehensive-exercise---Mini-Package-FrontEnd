import React, {Component} from 'react'
import { Input, Button } from 'antd';


export default class MiniPackageInput extends Component {
  state = {
    packageNumber: '',
    receiver: '',
    phonenumber: '',
    weight: '',
    status: 'Waiting'
  };

  handleInputPackageNumber = (event) => {
    this.setState({ packageNumber: event.target.value});
  };

  handleInputReceiver = (event) => {
    this.setState({ receiver: event.target.value});
  };

  handleInputPhoneNumber = (event) => {
    this.setState({ phonenumber: event.target.value});
  };

  handleInputWeight = (event) => {
    this.setState({ weight: event.target.value});
  };
  

  dispatch = () => {
    var MyPackages = [];
    MyPackages.push(this.state.packageNumber);
    MyPackages.push(this.state.receiver);
    MyPackages.push(this.state.phonenumber);
    MyPackages.push(this.state.weight);
    MyPackages.push(this.state.status);
    this.props.onNewTodoAdded(MyPackages);
    // console.log("Inputs: "+ this.state.packageNumber,this.state.receiver,this.state.phonenumber,this.state.weight);
    // console.log("LIST: "+ MyPackages);
  };

  render() {
    
    return (
      <div >
        Package Number: <Input type="text" value={this.state.packageNumber} onChange={this.handleInputPackageNumber} /><br/>
        Receiver: <Input type="text" value={this.state.receiver} onChange={this.handleInputReceiver} /><br/>
        Phone Number: <Input type="text" value={this.state.phonenumber} onChange={this.handleInputPhoneNumber} /><br/>
        Weight: <Input type="text" value={this.state.weight} onChange={this.handleInputWeight} /><br/>
        <Button onClick={this.dispatch}>ADD</Button>
      </div>
    )
  }
}