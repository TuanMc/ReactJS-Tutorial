import React from 'react';
import { Button } from 'reactstrap';
import '../assets/App.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Body extends React.Component {

    handleBtnOKClick() {
        console.log("btn OK clicked");
    }

    render() {
        return (
            <table className="table table-dark table-hover" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Notes</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.item.map(value => {
                            console.log("value: ")
                            console.log(value)
                            return (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.note}</td>
                                    <td>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Client name" />
                                            <div className="input-group-addon">

                                                {/* To use font-awsome:
                                                    - s1: npm install --save font-awesome
                                                    - s2: import 'font-awesome/css/font-awesome.min.css';
                                                */}
                                                <i className="fa fa-search fa-lg" onClick={this.btnOKClick}></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {/* 
                                        To use Bootstrap 4: 
                                        - s1: npm install --save reactstrap@next react react-dom
                                        - s2: import needed components. ex: import { Alert } from 'reactstrap';

                                        * For more information, visit page: https://reactstrap.github.io/
                                        */}
                                        <Button className="btn" color="danger">Danger!</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table >
        )
    }
}
