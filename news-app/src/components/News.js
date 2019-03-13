import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNews: props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
	  const nextFilteredNews = [...nextProps.data];
	  nextFilteredNews.forEach((item) => {
	    if (item.bigText.toLowerCase().indexOf('www') !== -1) {
	      const arr = item.bigText.split(' ');
	      arr.forEach((item, index) => {
	        if (item === 'www') {
	          arr.splice(index, 1, '***');
	        }
	      });
	      item.bigText = arr.join(' ');
	    }
	  });

	  this.setState({ filteredNews: nextFilteredNews });
  }

	renderNews = () => {
	  const { filteredNews } = this.state;
	  if (filteredNews.length) {
	    return filteredNews.map(item => <Article key={item.id} data={item} />);
	  }
	  return <p>К сожалению, новостей нет</p>;
	};

	render() {
		const { filteredNews } = this.state;
		return (
  			<div className="news">
    		{this.renderNews()}
    		{filteredNews.length ? (
      	<strong className="news__count">
				Всего новостей:
        		{' '}
        		{filteredNews.length}
      	</strong>
    ) : null}
  </div>
	  );
	}
}

News.propTypes = {
  data: PropTypes.array.isRequired,
};

export default News;
