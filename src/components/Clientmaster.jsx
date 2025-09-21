import React from 'react';

function Clientmaster() {
    return (
        <>
            <>
                <div style={{ backgroundColor: '#fff', padding: '1.2rem 1rem', boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: '5px', height: '81vh' }}>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All Client</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Add Client</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                            <form >
                                <div className="container mt-3">
                                    <div className="row">
                                        <div class="form-floating mb-3 col-lg-2 col-md-2 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Name" />
                                            <label for="floatingInput">Name</label>
                                        </div>
                                        <div class="form-floating mb-3 col-lg-2 col-md-2 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Mobile No." />
                                            <label for="floatingInput">Mobile No.</label>
                                        </div>
                                        <div class="form-floating mb-3 col-lg-2 col-md-2 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Email" />
                                            <label for="floatingInput">Email</label>
                                        </div>
                                        <div class="form-floating mb-3 col-lg-2 col-md-2 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="India" />
                                            <label for="floatingInput">India</label>
                                        </div>
                                        <div class="form-floating mb-3 col-lg-2 col-md-2 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="State" />
                                            <label for="floatingInput">State</label>
                                        </div>

                                        <div class="form-floating mb-2 col-lg-2 col-md-2 col-sm-12 ps-1">
                                            <button type="submit" class="btn btn-outline-success" style={{ width: '49%', height: '3.6rem', marginRight: '2%' }}>Search</button>
                                            <button type="button" class="btn btn-outline-danger" style={{ width: '49%', height: '3.6rem' }}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-2">
                                <h1></h1>
                            </div>

                            <div className="mt-4" >
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No.</th>
                                            <th scope="col">Client</th>
                                            <th scope="col">Client Mobile No.</th>
                                            <th scope="col">Client Email</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">State</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Ritik</td>
                                            <td>73106035114</td>
                                            <td>ritik@gmail.com</td>
                                            <td>India</td>
                                            <td>Uttar Pradesh</td>
                                            <td>Noida</td>
                                            <td>Sector 63</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Pawan</td>
                                            <td>7310603555</td>
                                            <td>pawan@gmail.com</td>
                                            <td>India</td>
                                            <td>Uttar Pradesh</td>
                                            <td>Bareilly</td>
                                            <td>Subhash Nagar</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div
                                className="row"
                                style={{ position: 'fixed', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }} >
                                <div>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                            <form>
                                <div className="container mt-3">
                                    <div className="row">
                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Enter Client Name" />
                                            <label>Client Name</label>

                                        </div>
                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Enter CLient Mobile No." />
                                            <label>Client Mobile No.</label>

                                        </div>
                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="name@example.com" />
                                            <label>Client Email </label>
                                        </div>

                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Enter Country Name" />
                                            <label>Country Name </label>
                                        </div>

                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Enter State Name" />
                                            <label>State Name </label>
                                        </div>

                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Enter City Name" />
                                            <label>City Name </label>
                                        </div>

                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <input type="text" class="form-control" placeholder="Enter Address" />
                                            <label>Address </label>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div class="form-floating mb-3 col-lg-3 col-md-3 col-sm-12 ps-1">
                                            <button type="button" class="btn btn-outline-danger" style={{ width: '49%', marginRight: '2%' }}>Cancel</button>
                                            <button type="submit" class="btn btn-outline-success" style={{ width: '49%' }}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Clientmaster;