import React, { Component } from 'react';
import Navbar from './Components/Navbar';
//import InfiniteScroll from 'react-infinite-scroller';
import Image from './Components/Image';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      query:'',
      count: 1    
    }
    this.showImg = this.showImg.bind(this);
  }

//trayendo las fotos
  componentDidMount(){
    fetch(`https://pixabay.com/api/?key=1858501-7166f0d9f959bd64071f003d7&image_type=photo&orientation=vertical&per_page=20`)
    .then(response => response.json())
    .then(data =>this.setState({images: data.hits}))
    .catch(error => console.log('parsing failed', error))
  }
  
  //mostrando las fotos
  showImg(){
    return(
      this.state.images.map((image, index) => {
        return (
          <Image  key={index} url={image.largeImageURL} tags={image.tags} author={image.user}/>
        )
      })
    )
  }

  render(){

    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main className="main-container gridCentered">
          <div className="masonry-container">
            <div className="masonry">
              <this.showImg/>

            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
