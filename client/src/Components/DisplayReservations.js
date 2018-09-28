import React from "react";

const DisplayReservations = ({ reserved }) => {
  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col col-md">
            {reserved.map(data => {
              return (
                <div className="card" style={Styles.card} key={data.id} style={{ width: "30rem" }}>
                  <div className="card-body">
                    <p>Name</p>
                    <div className="card-title">{data.client}</div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        <p>Phone</p>
                        {data.phone}
                      </li>
                      <li class="list-group-item">
                        <p>Party Size</p>
                        {data.party_size}
                      </li>
                      <li class="list-group-item">
                        <p>Time</p>
                        {data.reserved_time}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DisplayReservations;

const Styles = {
  card: {
    width: "20rem"
  }
};
