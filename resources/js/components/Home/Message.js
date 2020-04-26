import React,{Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';

export default class Message extends Component {
    constructor(props){
        super(props);
        this.state={
           text :'par defaut If the optimal algorithm is not feasible, perhaps an approximation of the optimal algog backward versus'
       }
  
   }
   onSelect = (id) => {
    switch(id){
        case 1:
            this.setState({
                text : 'text 1 If the optimal algorithm is not feasible, perhaps an approximation of the optimal algog backward versus'
            })
          break;
          case 2:
            this.setState({
                text : 'text 2 If the optimal algorithm is not feasible, perhaps an approximation of the optimal algog backward versus'
            })
          break;
          case 3:
            this.setState({
                text : 'text 3 If the optimal algorithm is not feasible, perhaps an approximation of the optimal algog backward versus'
            })
          break;
          default :
          this.setState({
            text : 'par defaut If the optimal algorithm is not feasible, perhaps an approximation of the optimal algog backward versus'
             })
          break;
 
   }
}
    render(){
        return (
            <Paper>
            <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                <Tab label="Qui Nous Sommes" onClick={()=> this.onSelect(1)}/>
                <Tab label="Nos Oeuvres" onClick={()=> this.onSelect(2)} />
                <Tab label="Nos Partenariats" onClick={()=> this.onSelect(3)}/>
            </Tabs>
            <Typography variant="h6" >
               {this.state.text}
             </Typography>
        </Paper>
        );
    }
    
}

