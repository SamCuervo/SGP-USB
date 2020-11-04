import React from 'react'

export default function Search() {
    return (
      <div className="py-5 text-center" draggable="true">
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-12" />
          </div>
          <div className="row">
            <div className="col-md-12" />
          </div>
          <div className="row">
            <div className="mx-auto col-md-6">
              <h1>Get in the loop</h1>
              <p className="mb-4">
                A wonderful serenity has taken possession of my entire soul
              </p>
              <form className="form-inline d-flex justify-content-center">
                <div className="input-group">
                  {" "}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    id="form1"
                  />
                  <div className="input-group-append">
                    {" "}
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" />
          </div>
          <div className="row">
            <div className="col-md-12" />
          </div>
        </div>
      </div>
    );
}
