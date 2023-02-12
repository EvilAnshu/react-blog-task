import React, { Component } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './styles/showBlog.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

class ShowNavi extends Component {

    count = [1,2,3];
    constructor() {
        super();
        this.state = {
            title: "",
            desc: "",
            users: [],
            isLoading: true
        }
    }
    componentDidMount() {
        // fetch("http://localhost:5000/posts", {
        fetch("https://json-server-8i27.onrender.com/posts", {
            method: "GET"
        }).then((resp) => {
            return resp.json();
        }).then((dt) => {
            if (Array.isArray(dt)) {
                this.setState({
                    users: dt
                })
            }
        }).catch((error) => {
            this.setState({
                isLoading : false
            })
            // console.log(error);
        })
    }
    showPage = (item) => {
        // console.log(item)
        this.props.navigate("/Detail#" + item.slug, { state: { item: item } })
    }
    getData = () => {
        if (this.state.users.length == 0) {
            return (
                <>
                
                    {this.state.isLoading
                    ?
                    <SkeletonTheme baseColor="#202020" highlightColor="#444">
                        {
                            this.count.map((data)=>{
                        return <div className="col-lg-4" key={data}>
                            <div className="card card-margin">
                                <div className="card-header no-border">
                                    <div><h5 className="card-title"><Skeleton /></h5></div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="widget-49">
                                        <div className="widget-49-title-wrapper">

                                            <div className="widget-49-meeting-info">
                                                {/* <span className="widget-49-pro-title">PRO-08235 DeskOpe. Website</span> */}
                                                <span className="widget-49-meeting-time"><Skeleton /></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>})}
                        
                    </SkeletonTheme>
                    :
                    <div className="col-lg-4">
                            <div className="card card-margin">
                                <div className="card-header no-border">
                                    <div><h5 className="card-title">No Data Found</h5></div>
                                </div>
                                
                            </div>
                        </div>
        }
                </>
            )
            
        }
        else
            return (this.state.users.map((item, index) => {
                return (<React.Fragment key={index}>
                    



                    <div className="col-lg-4">
                        <div className="card card-margin">
                            <div className="card-header no-border">
                                <div><h5 className="card-title">{item.title}</h5></div>
                                <div><input type="button" onClick={() => { this.showPage(item) }} value="View" className="btn btn-outline-success a" /></div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="widget-49">
                                    <div className="widget-49-title-wrapper">

                                        <div className="widget-49-meeting-info">
                                            {/* <span className="widget-49-pro-title">PRO-08235 DeskOpe. Website</span> */}
                                            <span className="widget-49-meeting-time">{item.date}</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </React.Fragment>
                )
            }))
    }
    render() {
        return (
            <>
                <div className="container">

                    <div className="row mt-4">
                        {this.getData()}
                    </div>
                </div>

            </>
        );
    }
}
export function ShowBlog() {
    const navigate = useNavigate();
    // console.log(location.state.id)
    return <ShowNavi navigate={navigate} />
}

export default ShowBlog;