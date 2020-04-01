import React, { Component} from 'react';
import ReactDOM from 'react-dom';

export default class APropos extends Component {
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">A propos</div>
    
                            <div className="card-body">I'm an A propos component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}



