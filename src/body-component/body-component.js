import React from 'react';
import '../assets/App.css';

export default class Body extends React.Component {
    render() {
        function btnOKClick() {
            console.log("btn OK clicked");
        }

        function btnSearchClick() {

        }

        return (
            <table className="table table-dark table-hover" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Notes</th>
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
                                            <div className="input-group-addon"><i className="fa fa-search fa-lg" onClick={btnSearchClick}></i></div>
                                        </div>
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
