import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
	state = {visible: false};

	handleReadMoreClick = (e) => {
		e.preventDefault();
		this.setState({ visible: true });
	};

	render() {
		const { author, text, bigText } = this.props.data;
		const { visible } = this.state;
		return (
			<div className="article">
				<p className="news__author">{author}:</p>
				<p className="news__text">{text}</p>
				{
					visible ?
					<p className="news__big-text">{bigText}</p> :
					<a
						onClick={this.handleReadMoreClick}
						href="#readmore"
						className="news__readmore"
					>
						Подробнее
					</a>
				}
			</div>
		);
	}
}

Article.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired, // добавили id, это число, обязательно
		author: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		bigText: PropTypes.string.isRequired
	})
};

export default Article;