import React, {Component} from 'react';
import './Bowling.css';
import './App.css';

export class Player extends Component{


    constructor(props){
        super(props);
        this.state={frames:[]}
        
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'game')
        .then(response=>response.json())
        .then(data=>{
            this.setState({frames:data})
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

  

    render(){
        

        const totalScore = (this.state.frames.reduce((totalScore, currentItem) =>
        totalScore = totalScore + currentItem.Sum, 0));
        
        const scoreboard = this.state.frames.map((frame => 
            <td key={frame.FrameNumber}>
                {frame.FirstScore === 10 &&
                    <th>X</th>
                    }

                    {frame.FirstScore < 10 &&
                     <th>{frame.FirstScore}</th>
                     }
 
                    
                    {frame.FirstScore < 10 &&
                    <th>{frame.SecondScore}</th>
                    }           
                    
                
                <tr>{frame.FirstScore + frame.SecondScore}</tr>
                </td>
                
            
            ));

            

        return(
            <div class='center'>
                <tr>
                    <td>Player</td>
                    
                </tr>
                
                <tbody>
                    
                  {scoreboard}
                        <tr>Total: {totalScore}</tr>
                </tbody><br/>
            </div>
        )
    }
}