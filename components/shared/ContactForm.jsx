import ContactImage from "../../assets/images/contact.png";
import Image from "next/image";
import React from "react";
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
function ContactForm({ data, contactStyles }) {
  const successNotify = (text) =>
    toast.success(text, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotify = (text) =>
    toast.error(text, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const router = useRouter();
  return (
    <section
      className={contactStyles}
      style={{
        overflow: "hidden",
      }}
    >
      <div className="row align-items-center h-100">
        <div className="col-md-6 ps-35 pe-35 ps-lg-85 pe-lg-50 pt-55 pb-55 h-100">
          <h2 className="fs-60 text-black fs-sm-15  arboria_bold mb-30 contacttitle">
            {data?.data?.attributes?.Contact_Section?.Contact_title}
          </h2>
          <h4 className="fs-18 text-black contactsubtitle  arboria_book mb-md-50 mb-40">
            {data?.data?.attributes?.Contact_Section?.Contact_Description}
          </h4>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              message: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.firstname) {
                errors.firstname = "Required";
              }
              if (!values.lastname) {
                errors.lastname = "Required";
              }
              if (!values.message) {
                errors.message = "Required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              (async () => {
                // Create the new request
                var xhr = new XMLHttpRequest();
                var url =
                  "https://api.hsforms.com/submissions/v3/integration/submit/8866839/12a71350-aa32-4d99-b24c-9337b1175589";

                // Example request JSON:
                var data = {
                  fields: [
                    {
                      name: "firstname",
                      value: values.firstname,
                    },
                    {
                      name: "lastname",
                      value: values.lastname,
                    },
                    {
                      name: "email",
                      value: values.email,
                    },
                    {
                      name: "message",
                      value: values.message,
                    },
                  ],
                  context: {
                    pageUri: "www.staging.hautelogic.net",
                    pageName: "Contact page",
                  },
                };

                var final_data = JSON.stringify(data);

                xhr.open("POST", url);

                // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
                xhr.setRequestHeader("Content-Type", "application/json");

                xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4 && xhr.status == 200) {
                    // Returns a 200 response if the submission is successful.
                    successNotify(
                      "Thanks for submitting the form. We will get in touch with you soon."
                    );
                    router.push("/thankyou");

                    resetForm();
                  } else if (xhr.readyState == 4 && xhr.status == 400) {
                    // Returns a 400 error the submission is rejected.
                    {
                      errorNotify(
                        "Please change your email address to continue."
                      );
                    }
                  } else if (xhr.readyState == 4 && xhr.status == 403) {
                    // Returns a 403 error if the portal isn't allowed to post submissions.
                    errorNotify("Something went wrong. Please try again.");
                  } else if (xhr.readyState == 4 && xhr.status == 404) {
                    //Returns a 404 error if the formGuid isn't found
                    errorNotify("Something went wrong. Please try again.");
                  }
                };

                // Sends the request
                xhr.send(final_data);
                setSubmitting(false);
              })();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-controlcontainer">
                      <input
                        type="text"
                        className={
                          errors.firstname
                            ? "form-control errorform"
                            : "form-control"
                        }
                        placeholder="First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        name="firstname"
                      />
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                        }}
                      >
                        {errors.firstname &&
                          touched.firstname &&
                          errors.firstname}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-controlcontainer">
                      <input
                        type="text"
                        className={
                          errors.lastname
                            ? "form-control errorform"
                            : "form-control"
                        }
                        placeholder="Last Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        name="lastname"
                      />
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                        }}
                      >
                        {errors.lastname && touched.lastname && errors.lastname}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-controlcontainer">
                      <input
                        type="email"
                        className={
                          errors.email
                            ? "form-control errorform"
                            : "form-control"
                        }
                        placeholder="Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                      />
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                        }}
                      >
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-controlcontainer">
                      <textarea
                        className={
                          errors.email
                            ? "form-control errorform"
                            : "form-control"
                        }
                        id="exampleFormControlTextarea1"
                        rows="5"
                        placeholder="Message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        name="message"
                      ></textarea>
                      <p
                        style={{
                          color: "red",
                          marginTop: "5px",
                        }}
                      >
                        {errors.message && touched.message && errors.message}
                      </p>
                      <ToastContainer
                        position="bottom-left"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="border-radius btn btn-outline-pink arboria_book fs-16 px-55 py-15 mt-40"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="col-md-6 d-md-block d-none">
          <Image src={ContactImage} alt="banner image" layout="responsive" />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
