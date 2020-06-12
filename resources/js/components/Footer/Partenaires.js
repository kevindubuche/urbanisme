import React ,{Component} from 'react';
import ares from '../../images/logoPartenaires/ares.png';
import bid from '../../images/logoPartenaires/bid.png';
import bonfed from '../../images/logoPartenaires/bonfed.jpg';
import ciat from '../../images/logoPartenaires/ciat.png';
import culture from '../../images/logoPartenaires/culture.png';
import dinepa from '../../images/logoPartenaires/dinepa.png';
import fds from '../../images/logoPartenaires/fds.png';
import mairiedelmas from '../../images/logoPartenaires/mairiedelmas.jpg';
import mairiekafou from '../../images/logoPartenaires/mairiekafou.jpg';
import mairiepop from '../../images/logoPartenaires/mairiepop.jpg';
import mairiepv from '../../images/logoPartenaires/mairiepv.jpg';
import mde from '../../images/logoPartenaires/mde.jpg';
import mict from '../../images/logoPartenaires/mict.jpg';
import mtptc from '../../images/logoPartenaires/mtptc.png';
import omrh from '../../images/logoPartenaires/omrh.jpg';
import ueh from '../../images/logoPartenaires/ueh.png';
import umons from '../../images/logoPartenaires/umons.png';


export default class Partenaires extends Component {
    render(){
        return(
            <div>
              <div style={{display:"flex",  justifyContent: "center", flexWrap:"wrap"}}>
                <img src={ares} width={"170px"} height={"80px"} style={{marginRight:50}} />
                <img src={bid} width={"100px"} height={"80px"} style={{marginRight:50}} />
                <img src={bonfed} width={"150px"} height={"80px"} style={{marginRight:50}} />
                <img src={ciat} width={"80px"} height={"80px"} style={{marginRight:50}} />

                <img src={culture} width={"80px"} height={"80px"} style={{marginRight:50}} />
                <img src={dinepa} width={"100px"} height={"80px"} style={{marginRight:50}} />
             

            </div>
            <div style={{display:"flex",  justifyContent: "center", flexWrap:"wrap" , marginTop:40}}>

            <img src={mairiekafou} width={"80px"} height={"80px"} style={{marginRight:50}} />
            <img src={mairiepop} width={"80px"} height={"80px"} style={{marginRight:50}} />
            <img src={mairiepv} width={"80px"} height={"80px"} style={{marginRight:50}} />
            <img src={mde} width={"80px"} height={"80px"} style={{marginRight:50}} />

            <img src={mict} width={"80px"} height={"80px"} style={{marginRight:50}} />
            <img src={mtptc} width={"80px"} height={"80px"} style={{marginRight:50}} />
            
        </div>
        <div  style={{display:"flex",  justifyContent: "center", flexWrap:"wrap" , marginTop:40, marginBottom:60}}>
        <img src={omrh} width={"80px"} height={"80px"} style={{marginRight:50}} />
            <img src={ueh} width={"170px"} height={"80px"} style={{marginRight:50}} />
            <img src={fds} width={"170px"} height={"80px"} style={{marginRight:50}} />
                <img src={mairiedelmas} width={"80px"} height={"80px"} style={{marginRight:50}} />
                <img src={umons} width={"170px"} height={"80px"} style={{marginRight:50}} />
        </div>
            </div>
    
        )
    }
}