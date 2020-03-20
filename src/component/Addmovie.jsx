import React, { Component } from 'react';
class Addmovie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            rating:"",
            img:"",
            name:"",
         }
    }
    render() { 

        let movie={
            name:this.state.name,
            img:this.state.img,
            rating:this.state.rating,
        }
        return ( 
            <div>
                <div className={this.props.display?"display":"hide"}>
                    <label>Name :</label>
                    <input type="text" onChange={(e)=> this.setState({
                        name:e.target.value
                    })}/>
                    <label>Image :</label>
                     <input type="text" onChange={(e)=> this.setState({
                      img:e.target.value
                    })}/>
                    <label>Rating :</label>
                     <input type="text" onChange={(e)=> this.setState({
                        rating:e.target.value
                    })}/>
                    <button onClick={()=>this.props.newmovie(movie)}>ADD</button>
                </div>
            </div>
         );
    }
}
 
export default Addmovie ;