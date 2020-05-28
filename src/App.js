import React from 'react';

import Header from './Header';
import { fetchData } from './api';

import './App.css';

class App extends React.Component {
  state = {
    data:{},
    recipes: [],
  }

  async componentDidMount() {   //content visible on screen
    const fetchedData = await fetchData(); 
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
