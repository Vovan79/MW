import React, { Component, Fragment } from 'react';
import Add from './components/Add';
import News from './components/News';
//import newsData from '../public/data/newsData';
import './App.css';

class App extends Component {
  state = {
     news: null,
     isLoading: false
  };

  componentDidMount() {
     this.setState({isLoading: true});
     fetch('http://localhost:3000/data/newsData.json')
        .then(response => response.json())
        .then(data => {
           setTimeout(() => {
              this.setState({
                 isLoading: false,
                 news: data
              });
           }, 3000);
        });
  }

   handleAddNews = (data) => {
    const nextNews = [data, ...this.state.news];
    this.setState({ news: nextNews });
  };

  render() {
    const { news, isLoading } = this.state;
    return (
      <Fragment>
         <Add onAddNews={this.handleAddNews} />
         <h3>Новости</h3>
         {isLoading && <p>Загрузка новостей...</p>}
         {Array.isArray(news) && <News data={news} />}
      </Fragment>
    );
  }
}

export default App;