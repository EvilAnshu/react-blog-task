import React, { Component } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/Detail.css';
import quote from './quote.png';

class Detailuser extends Component {
    render() {
        return (
            <>
                
                <section className="py-5">
    <div className="container">
        
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <header className="text-center pb-5">
                    <h1 className="h2">{this.props.user.title}</h1>
                    <p>Date : {this.props.user.date}</p>
                </header>
            </div>
        </div>


        <div className="row">
            <div className="col-lg-6 mx-auto">

                
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <div className="blockquote-custom-icon bg-info shadow-sm"><img src={quote} height="25px" className="text-white"/></div>
                    <p className="mb-0 mt-2 font-italic">"{this.props.user.desc}"</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Slug : 
                        <cite title="Source Title"> {this.props.user.slug}</cite>
                    </footer>
                </blockquote>

            </div>
        </div>
    </div>
</section>
            </>
        );
    }
}
export function Detail() {
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.state.id)
    let user = location.state.item;
    return <Detailuser navigate={navigate} user={user} />
}
export default Detail;