import React from "react";

function Content({ sidebarVisible }) {
  return (
    <main className={`content ${!sidebarVisible ? 'full' : ''}`} id="mainContent">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <div className="card text-bg-primary">
              <div className="card-body">
                <h5>Active Projects</h5>
                <h3>24</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-bg-warning">
              <div className="card-body">
                <h5>Pending Tasks</h5>
                <h3>58</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-bg-success">
              <div className="card-body">
                <h5>Monthly Revenue</h5>
                <h3>$89,450</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card text-bg-info">
              <div className="card-body">
                <h5>Deployment Success</h5>
                <h3>92%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
