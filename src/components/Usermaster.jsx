import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {createUser } from '../actions/userAction';

function Usermaster() {

    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        password:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createUser(form); 
        setForm({
            name: "",
            email:"",
            mobile: "",
            password: ""
        })
    }

    return (
        <>
            <div style={{ backgroundColor: '#fff', padding: '1.2rem 1rem', boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: '5px', height: '81vh' }}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All User</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Add User</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Name" {...register("searchName", { required: true })} />
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Mobile No." {...register("searchMobile", { required: true })} />
                                        <label for="floatingInput">Mobile No.</label>
                                    </div>
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" {...register("searchEmail", { required: true })} />
                                        <label for="floatingInput">Email address</label>
                                    </div>

                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <button type="submit" class="btn btn-outline-success" style={{ width: '49%', height: '3.6rem', marginRight: '2%' }}>Search</button>
                                        <button type="button" class="btn btn-outline-danger" style={{ width: '49%', height: '3.6rem' }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form> */}

                        <div className="mt-2">
                            <h1></h1>
                        </div>

                        <div className="mt-4" >
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Mobile No.</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Ritik</td>
                                        <td>73106035114</td>
                                        <td>ritik@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Pawan</td>
                                        <td>7310603555</td>
                                        <td>pawan@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Vaibhav</td>
                                        <td>9898987458</td>
                                        <td>vaibhav@gmail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="row"
                            style={{ position: 'fixed',bottom: '2.5rem',left: '50%',transform: 'translateX(-50%)'}} >
                            <div>
                                <p>pagination</p>
                            </div>
                        </div>

                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <form onSubmit={handleSubmit}>
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}/>
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Mobile No." value={form.mobile} onChange={(e) => setForm({...form, mobile: e.target.value})}/>
                                        <label for="floatingInput">Mobile No.</label>
                                    </div>
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="password" class="form-control" id="floatingInput" placeholder="*****" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>
                                        <label for="floatingInput">Password</label>                                    
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        {/* <button type="button" class="btn btn-outline-danger" style={{ width: '49%', marginRight: '2%' }}>Cancel</button> */}
                                        <button type="submit" class="btn btn-outline-success" style={{ width: '49%' }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Usermaster;