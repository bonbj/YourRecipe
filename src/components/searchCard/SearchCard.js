import React, { Component } from 'react';
import './SearchCard.css'

class SearchCard extends Component {
    state = {
        colorNumber: 1
    }
    componentDidMount(){
        this.setState({ colorNumber : Math.floor(Math.random() * (5 - 1) + 1)  });
    }
    render(){
        return (
            <div className={`container search-card color-${this.state.colorNumber}`}>
                <div className="row">
                    <div className="col-6 search-card-title-box">
                        <h1 className="search-card-title">{this.props.meal.strMeal}</h1>
                        <div className="search-card-title-meals">
                            <p className="search-card-title-type">{this.props.meal.strArea}</p>
                            <p>&nbsp;|&nbsp;</p>
                            <p className="search-card-title-type">{this.props.meal.strCategory}</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <img className="search-card-image" src={this.props.meal.strMealThumb} alt={this.props.meal.strMeal} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchCard;