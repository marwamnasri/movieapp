import React, { Component } from 'react';
class Movielist extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            <div className="list">
                {this.props.movielist.filter(el=>(el.name.toLowerCase().includes(this.props.searchinput.toLowerCase().trim())&&(el.rating <=this.props.searchstar)))
            .map(el=><div className="Card">
            <h2>{el.name}</h2>
            <span>{"".padStart(el.rating,"⭐")}</span>
            <img className="img" src={el.img}/>
            </div>)}
            {console.log(this.props.movielist)} 
            </div>
         );
    }
}
 
export default Movielist ;