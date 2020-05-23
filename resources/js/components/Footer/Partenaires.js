import React ,{Component} from 'react';
import ibm from '../../images//ibm.png';
export default class Partenaires extends Component {
    render(){
        return(
            <div style={{display:"flex",  justifyContent: "center"}}>
                <img src={ibm} width={"100px"} height={"100px"} style={{marginRight:50}} />
                <img src={ibm} width={"100px"} height={"100px"} style={{marginRight:50}} />
                <img src={ibm} width={"100px"} height={"100px"} style={{marginRight:50}} />
            </div>
        )
    }
}