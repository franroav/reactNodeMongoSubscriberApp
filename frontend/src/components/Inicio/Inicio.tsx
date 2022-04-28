//import React, { Fragment } from "react";
import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { requestInvitation } from "../../services/subscriber.service";
import { Invitation } from "../../interface/Invitation";
import "./Inicio.css";
import Swal from "sweetalert2";
const Button = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-3">
          <button className="btn btn-success btn-block">COMPARTIR</button>
        </div>
      </div>
    </>
  );
};

function Inicio(): JSX.Element {
  const [searchInReducer, setSearchInReducer] = useState<boolean>(false);
  const initialValues = { email: "", name: "" };
  const [formValues, setFormValues] = useState<Invitation>(initialValues);
  const [formErrors, setFormErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [validCode, validateCode] = useState<boolean>(false);
  const [validUrl, validateUrl] = useState<string>("");
  const history = useHistory();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendForm = async (e: any) => {
    e.preventDefault();
    // setFormValues({ email, name: fullname });
    setFormErrors(await validate(formValues));
    console.log(formErrors);
    //
    if (
      !formErrors.name &&
      !formErrors.email &&
      formValues.name.length !== 0 &&
      formValues.email.length !== 0
    ) {
      const response = await requestInvitation(formValues);
      if (!response.error) {
        validateUrl(response);
        validateCode(true);
        setIsSubmit(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Invitación generada exitosamente!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `El correo ${formValues.email} no! esta registrado!`,
          footer:
            '<p class="text-lead"><small>porfavor intentelo nuevamente con un correo registrado, muchas gracias</small></p>',
        });
      }
    }
    setTimeout(() => {
      setIsSubmit(false);
    }, 1600);
  };

  const sendToRegistrationForm = async (e: any) => {
    history.push(validUrl.replace("http://localhost/", ""));
  };
  const validate = async (values: any) => {
    let errors: any = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (values.name.length === 0) {
      errors.name = "Nombre completo es requerido!";
    } else if (!values.name) {
      errors.name = "Nombre completo es requerido!";
    } else if (
      values.name.match("^[A-Za-z]{1,20}, [A-Za-z]{1,20}, [A-Za-z]{1,20}")
    ) {
      errors.name = "Nombre completo es requerido!";
    }
    if (values.email.length === 0) {
      errors.email = "Email es requerido!";
    } else if (!values.email) {
      errors.email = "Email es requerido!";
    } else if (!regex.test(values.email)) {
      errors.email = "El email no tiene un formato valido!";
    }
    return errors;
  };

  return (
    <Fragment>
      <div className="container">
        {isSubmit ? (
          <div className="alert alert-success">
            Invitación generada correctamente!
          </div>
        ) : (
          <pre></pre>
        )}
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="jumbotron ">
            <form onSubmit={sendForm}>
              <div className="row">
                <div className="form-group col-md-6">
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
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-sm"
                    placeholder="Nombre Completo"
                    onChange={handleChange}
                    value={formValues.name}
                  />
                  <p>{formErrors.name}</p>
                </div>
              </div>
              <hr />
              <Button />
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
          {validCode ? (
            <div className="jumbotron text-center">
              <a href="" onClick={(e) => sendToRegistrationForm(e)}>
                {validUrl}
              </a>
            </div>
          ) : (
            <a href={validUrl}></a>
          )}
        </div>
      </div>
    </Fragment>
  );
}
export default Inicio;
