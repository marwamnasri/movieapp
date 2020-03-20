
import React, { Component } from 'react';
import './App.css';
import Movielist from './component/Movielist';
import Addmovie from './component/Addmovie';
class App
 extends Component  {
  constructor(props) {
    super(props);
    this.state = { 
      movielist:[{name:"VICE", img:"https://media.senscritique.com/media/000018343832/325/Vice.jpg" , rating:3} ,{name:"FORET", img:"https://fr.web.img6.acsta.net/pictures/19/07/09/16/20/2730316.jpg", ratint:4}, {name:"DORA", img:"https://fr.web.img6.acsta.net/pictures/19/07/09/16/20/2730316.jpg", rating:4},{name:"WAR", img:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/War_official_poster.jpg/220px-War_official_poster.jpg", rating:3},{name:"SOL", img:"https://fr.web.img6.acsta.net/pictures/19/11/14/11/00/4656952.jpg", rating:3},{name:"ALITA", img:"https://media.senscritique.com/media/000018296111/325/Alita_Battle_Angel.jpg", rating:5}],
      searchinput:"",
      searchstar:5,
      display:false
     }
  }
  addmovie=(newmovie)=>{
    this.setState({
      movielist:[...this.state.movielist,newmovie]
    })
   
  }
  render() { 
    return (<div className="affich">
      <div className="search">
        <input type="text"  placeholder="Search" onChange={(e)=> this.setState({
            searchinput:e.target.value})}/>
            <span onClick={()=>this.setState({searchstar:1 })}>⭐</span>
            <span onClick={()=>this.setState({searchstar:2 })}>⭐</span>
            <span onClick={()=>this.setState({searchstar:3 })}>⭐</span>
            <span onClick={()=>this.setState({searchstar:4 })}>⭐</span>
            <span onClick={()=>this.setState({searchstar:5 })}>⭐</span>
            {console.log(this.state.searchstar)}
      </div>
      
      <Movielist movielist={this.state.movielist} searchinput={this.state.searchinput} searchstar={this.state.searchstar}/>
      <Addmovie newmovie={this.addmovie} display={this.state.display} />
      <div className="ajout"><h3 onClick={()=> this.setState({display:!this.state.display})}>+</h3></div>
    </div>

      );
  }
}
 
export default App ;