import { Component } from 'react'
import {urlApi , apiKey } from '../dati/dati'

import './Movies.css'
export default class MoviesHome extends Component {

        state = {
            moviez: []
        }

    componentDidMount() {
        fetch(`${urlApi}${this.props.urlMovies}`)
            .then(response => response.json())
            .then(result => {
                this.setState({ moviez: result.Search })
                console.log(this.moviez)
            })
            .catch(error => console.log('error', error));
        }

    render() {
        
        // const { moviez } = this.state;

        return (
            <>
                <h1 className="text-center movieSection text-white fs-3">{this.props.sectionTitle}</h1>
                <div className='mx-auto movieContainer '>
                    <div className='moviesDiv carouselContainer'>
                        {this.state.moviez.map(movie => (
                            <div className="col mb-2 movieDiv carouselSlide">
                                <img className="img-fluid" src={movie.Poster} alt="movie picture"/>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}