import React from "react";
import ManagementOptions from "./ManagementOptions";

const ManagementPage = () => {
  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col col-md">
          <ManagementOptions/>
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
