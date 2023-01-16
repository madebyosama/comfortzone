import React from "react";

const Payment = ({ history }) => {
  return (
    <div className="container my-5">
      <h1>Payment</h1>

      <button
        onClick={() => history.replace("/billing")}
        className="btn btn-cz"
      >
        Pay
      </button>
    </div>
  );
};

export default Payment;
