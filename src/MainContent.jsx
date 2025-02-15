import { Button } from "bootstrap";
import React, { Component } from "react";

export default class MainContent extends Component{
    state = { pageTitle : "Customers",customersCount :5};
    render(){
        return <div>
            <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
            <span className>{this.state.customersCount}</span>
            <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
            </h4>
        </div>
    }

    onRefreshClick=() =>
    {
        this.setState({customersCount:this.state.customersCount+2})
    }
}