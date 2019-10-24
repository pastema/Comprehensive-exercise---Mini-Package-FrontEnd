import React, {Component} from 'react';
import MiniPackageInput from '../MINIPACKAGE/MiniPackageInput';
import MiniPackageResource from '../API/MiniPackageResource';
import MiniPackages from '../MINIPACKAGE/MiniPackages';
import { Typography  } from 'antd';
const { Title } = Typography;

export default class TodoWrapper extends Component {

    componentDidMount() {
        MiniPackageResource.getAll()  
        .then(res => res.json())
        .then(res => {
          // console.log("todos res:", res._embedded.todos);
          this.props.refreshTodos( res._embedded.miniPackage)
          })
    };


    addPackage = miniPackage => {
        // if(miniPackage) {
            // console.log("INSERT:"+ miniPackage);
            this.props.createPackage(miniPackage);
        // }
    }

    render(){
        return(
            <div>
                <Title type="warning">Package warehouse-in</Title>
                <MiniPackageInput onNewTodoAdded={this.addPackage}/>
                <MiniPackages/>
            </div>
        )
    }

}