import React, { Component } from 'react';

class Portfolio extends Component {
	renderProjects = projects => {
		return projects.map(function(projects) {
			var projectImage = 'images/portfolio/' + projects.image;
			return (
				<div key={projects.title} className="columns portfolio-item">
					<div className="item-wrap">
						<a href={projects.url} title={projects.title}>
							<img alt={projects.title} src={projectImage} />
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{projects.title}</h5>
									<p>{projects.category}</p>
								</div>
							</div>
							<div className="link-icon">
								<i className="fa fa-link"></i>
							</div>
						</a>
					</div>
				</div>
			);
		});
	};

	renderArticles = articles => {
		return articles.map(function(article) {
			return (
				<div key={article.title} className="article-item">
					<div className="item-wrap">
						<a href={article.url} title={article.title}>
							<h3>{article.title}</h3>
						</a>
					</div>
				</div>
			);
		});
	};

	render() {
		const projects =
			this.props.data !== undefined ? this.props.data.projects : [];
		const articles =
			this.props.data !== undefined ? this.props.data.articles : [];

		return (
			<section id="portfolio">
				{projects && (
					<div className="row">
						<div className="twelve columns collapsed">
							<h1>Check out some of my works</h1>

							<div
								id="portfolio-wrapper"
								className="bgrid-quarters s-bgrid-thirds cf"
							>
								{this.renderProjects(projects)}
							</div>
						</div>
					</div>
				)}
				{articles && (
					<div className="row">
						<div className="twelve columns collapsed">
							<h1>Read some of my articles</h1>

							<div
								id="portfolio-wrapper"
								className="bgrid-quarters s-bgrid-thirds cf"
							>
								{this.renderArticles(articles)}
							</div>
						</div>
					</div>
				)}
			</section>
		);
	}
}

export default Portfolio;
