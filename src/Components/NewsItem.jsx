
import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date,source} = this.props;
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>
                        {source}   
                    </span>
                    <img src={!imageUrl ? 'https://www.hindustantimes.com/ht-img/img/2024/01/16/1600x900/ramaswamy_1705410751649_1705410769853.png' : imageUrl} alt="alternate pic" />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? 'Unknown' : author} Last updated {new Date(date).toGMTString()} </small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
