import React from 'react';

function Usermaster() {
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
                        Search
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <form>
                            <div className="container mt-3">
                                <div className="row">
                                    <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Name" />
                                        <label for="floatingInput">Name</label>
                                    </div>
                                    <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Mobile No." />
                                        <label for="floatingInput">Mobile No.</label>
                                    </div>
                                    <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <input type="password" class="form-control" id="floatingInput" placeholder="*****" />
                                        <label for="floatingInput">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                        <button type="button" class="btn btn-outline-danger" style={{ width: '49%', marginRight: '2%' }}>Cancel</button>
                                        <button type="button" class="btn btn-outline-success" style={{ width: '49%' }}>Save</button>
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