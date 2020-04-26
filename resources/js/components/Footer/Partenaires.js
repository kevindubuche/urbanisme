import React ,{Component} from 'react';
import inb from './inb.png';
export default class Partenaires extends Component {
    render(){
        return(
            <div style={{display:"flex",  justifyContent: "center"}}>
                <img src={inb} width={"100px"} height={"100px"} style={{marginRight:50}} />
                <img src={inb} width={"100px"} height={"100px"} style={{marginRight:50}} />
                <img src={inb} width={"100px"} height={"100px"} style={{marginRight:50}} />
            </div>
        )
    }
}