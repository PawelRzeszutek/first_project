import React from 'react'

export default function CartColumns() {
return <div className="container-fluid text-center d-none d-lg-block">
        <div className="row">

            <div className="col-10 mx-auto col-lg-2">
                <p className="text-ippercase">products</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-ippercase">name of product</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-ippercase">price</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-ippercase">quantity</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-ippercase">remove</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-ippercase">total</p>
            </div>
        </div>
    </div>;   
}

