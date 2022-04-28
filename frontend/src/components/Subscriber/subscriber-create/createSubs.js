import React, { Fragment, useState, useEffect, useRef } from "react";
import { Subscriber } from "../../../model/Subscriber";
import {
  createOneSubscriber,
  getAllSubscribers,
} from "../../../actions/subscriberActions";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
const Subs = ({
  createOneSubscriber,
  getAllSubscribers,
  subscriberReducer,
}) => {
  const initialValues = new Subscriber("", "", "", "");
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { code } = useParams();
  const nameInput = useRef(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log({ ...formValues, code });
    await createOneSubscriber({ ...formValues, code });
    await getAllSubscribers();
    setFormValues(initialValues);
    nameInput.current.focus();
    setTimeout(() => {
      setIsSubmit(false);
    }, 2000);
  };

  //
  /* useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // setIsSubmit(true);
    } else {
      // setIsSubmit(false);
    }
  }, [formErrors]);*/
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Nombre completo es requerido!";
    }
    if (!values.email) {
      errors.email = "Email es requerido!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.gender) {
      errors.gender = "El sexo es requerido";
    }
    if (!values.address) {
      errors.address = "La dirección es requerida";
    } else if (values.address.length < 10) {
      errors.address =
        "La dirección no debe ser menor a 10 letras como minimo. es requerida address must be more than 10 characters";
    } else if (values.address.length > 30) {
      errors.address =
        "La dirección no debe ser mayor a 30 letras como maximo.";
    }
    return errors;
  };

  // {JSON.stringify(formValues, undefined, 2)}
  return (
    <Fragment>
      <div className="container">
        {isSubmit ? (
          <div className="alert alert-success">
            Datos ingresados correctamente!
          </div>
        ) : (
          <pre></pre>
        )}
      </div>
      <div className="container">
        <div className="card col-md-6 offset-md-2">
          <div className="card-header text-center">
            <div className="card-title">
              <h2>
                <b>Formulario de registro</b>
              </h2>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="name"
                    ref={nameInput}
                    className="form-control form-control-sm"
                    placeholder="Nombre Completo"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  <p>{formErrors.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-sm"
                    placeholder="Ingresar tu email"
                    onChange={handleChange}
                    value={formValues.email}
                  />
                  <p>{formErrors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <select
                    type="text"
                    name="gender"
                    className="form-control form-control-sm"
                    value={formValues.gender}
                    onChange={handleChange}
                  >
                    <option defaultValue="0">Sexo</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <p>{formErrors.gender}</p>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  placeholder="Dirección"
                ></textarea>
                <p>{formErrors.address}</p>
              </div>
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <button className="btn btn-success btn-block">
                    Registrarse
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <em>Subscribers form.</em>
            </small>
          </div>
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
  createOneSubscriber,
  getAllSubscribers,
})(Subs);
//export default Subs;
