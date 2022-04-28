import { getAllSubscribers } from "../../actions/subscriberActions";
import "./Subscriber.css";
import MaterialTable from "material-table";
import { Card } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Subscribers = ({ getAllSubscribers, subscriberReducer }) => {
  const [searchInReducer, setSearchInReducer] = useState(false);
  const { subscribers } = subscriberReducer;
  const history = useHistory();
  const listOfUsers = [];
  const columns = [
    {
      title: "Nombre completo",
      field: "name",
      render: (rowData) => (
        <span class="badge badge-secondary">
          <i className="fa fa-user pr-2"> {rowData.name}</i>
        </span>
      ),
    },
    {
      title: "Invitaciones",
      field: "invitation",
      render: (rowData) => (
        <span class="badge badge-primary">
          {rowData.invitation}
          <i className="fa fa-info-circle pl-2"> </i>
        </span>
      ),
    },
    {
      title: "Total recibido $",
      field: "amount",
      render: (rowData) => (
        <small>
          <p className="text-lead">
            {rowData.amount.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </p>
        </small>
      ),
    },
  ];

  if (searchInReducer) {
    if (subscribers !== undefined && subscribers.length) {
      for (const subscriber of subscribers) {
        listOfUsers.push({
          ...subscriber,
        });
      }
    }
  } else {
    console.log("aun no hay data");
  }
  const userDetails = (row, caso) => {
    history.push(`/subscription/${row._id}`);
  };
  useEffect(() => {
    const loadSubscribers = async () => {
      const data = await getAllSubscribers();
      console.log({ data });
      setSearchInReducer(true);
    };

    loadSubscribers();
  }, [getAllSubscribers]);

  return (
    <Fragment>
      <div className=" row">
        <div className="col-md-8 offset-md-2">
          <Card>
            <MaterialTable
              columns={columns}
              data={listOfUsers}
              title="Suscriptores"
              actions={[
                {
                  //icon: "remove_red_eye",
                  icon: "remove_red_eye",
                  tooltip: "View Subscriber",
                  onClick: (event, rowData) => userDetails(rowData, "view"),
                },
              ]}
              options={{
                actionsColumnIndex: -1,
                filtering: true,
                sorting: true,
                exportButton: true,
                fixedColumns: {
                  left: 1,
                  right: 0,
                },
              }}
              localization={{
                header: {
                  actions: "Acciones",
                },
              }}
            />
          </Card>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateProps = ({ subscriberReducer, buttonReducer }) => ({
  subscriberReducer,
  buttonReducer,
});

export default connect(mapStateProps, {
  getAllSubscribers,
})(Subscribers);
