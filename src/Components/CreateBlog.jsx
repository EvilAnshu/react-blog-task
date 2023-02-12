import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class BlogPage extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            desc: "",
            users: []
        }
    }
    getUser = () =>{
        // fetch("http://localhost:5000/posts", {
        fetch("https://json-server-8i27.onrender.com/posts", {
            method: "GET"
        }).then((resp) => {
            return resp.json();
        }).then((dt) => {
            if (Array.isArray(dt)) {
                this.setState({
                    users: dt,
                    title : "",
                    desc : ""
                })
            }
            // console.log(dt)
        }).catch((error) => {
            console.log(error);
        })
    }
    componentDidMount() {
        this.getUser();
    }

    saveData = () => {
        let newdate = new Date();
        let data = {
            title: this.state.title,
            slug: this.state.title.replaceAll(" ", "-"),
            desc: this.state.desc,
            date: newdate.getDate() + "-" + newdate.getMonth() + "-" + newdate.getFullYear()
        }

        let check = this.state.users.filter((d) => d.slug == data.slug)
        // console.log(check)
        if (check.length == 0) {
            // fetch("http://localhost:5000/posts", {
            fetch("https://json-server-8i27.onrender.com/posts", {
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(data),
                method: "POST"
            }).then((response) => {
                return response.json();
            }).then((result) => {
                alert("Success");
            }).catch((error) => {
                console.log(error);
            })
        }
        else {
            alert("blog already found");
        }
        this.getUser();
    }

    showData = () => {
        // console.log(this.state.users)
        this.props.navigate("/show-blog", { state: { users: this.state.users } })
    }
    render() {
        return (
            <>
                <section className="vh-100" style={{ "backgroundColor": "#eee" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ "borderRadius": "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create New Blog</p>

                                                <form className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor='title'>Blog Title</label>
                                                            <input type="text" value={this.state.title} onChange={(e) => { this.setState({ title: e.target.value }) }} id="title" className="form-control" />

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor='desc'>Blog Description</label>
                                                            <textarea value={this.state.desc} onChange={(e) => { this.setState({ desc: e.target.value }) }} id='desc' className="form-control" ></textarea>

                                                        </div>
                                                    </div>



                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <input type="button" value="Submit" onClick={this.saveData} className="btn btn-primary btn-lg"/>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                    className="img-fluid" alt="Sample image" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}
export function CreateBlog(props) {
    const navigate = useNavigate();
    return <BlogPage navigate={navigate} />
}

export default CreateBlog;