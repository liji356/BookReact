import React from 'react'
import Header from './Header'

const Addbook = () => {
  return (
    <div>
      <Header/>

<div className="container">
    <div className="row">
        <dic className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
     <label for="" className="form-label"> Book title</label>
     <input type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
     <label for="" className="form-label">Author</label>
     <input type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-16 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label for="" className="form-label">Price</label>
        <input type="text" className="form-control"/>
    </div>
    <div className="col col-12 col-sm-16 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btm btn-success">SUBMIT</button>
    </div>
</div>

        </dic>
    </div>
</div>

    </div>
  )
}

export default Addbook