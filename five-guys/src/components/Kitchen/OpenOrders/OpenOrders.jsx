import React from "react";
import Pagination from "../Pagination/Pagination";
import CardOpen from "../CardOpen/CardOpen";
import { Link } from "react-router-dom";

const OpenOrders = ({token, pending, setPending}) => {
  return (

    <article className="bg-light vh-100 ">
        <section className="">
            <button className="btn bg-dark text-white w-10 mt-4 rounded-5">
            Open
            </button>

            <Link className="btn bg-white text-black w-10 mt-4 rounded-5" to='/completedorders' >
            Completed
            </Link>
        </section>
        <section className="">
            <Pagination />
        </section>     
        <section className="card-grid">
          <CardOpen token={token} pending={pending} setPending={setPending} />
        </section> 
         
    </article>
    
 
    
  );
};

export default OpenOrders;
