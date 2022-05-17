import React from 'react'
import Header from './Header'

const Viewbook = () => {


    var booklist={"Title":"Wings of fire",
                   "Price":"200",
                "Author":"APJ"}
  return (
    <div>
        <Header/>

        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label className='form-label'>Title:</label>
                    {booklist.Title}
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label className='form-label'>Author:</label>
                    {booklist.Author}
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label className='form-label'>Price:</label>
                    {booklist.Price}
                </div>
            </div>
        </div>
    </div>
</div>
        
       
        </div>
  )
}

export default Viewbook