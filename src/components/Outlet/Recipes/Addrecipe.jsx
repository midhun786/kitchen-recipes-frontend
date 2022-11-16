import { useFormik } from 'formik';
import axios from 'axios';
import React from 'react'
import { env } from '../../../config';

function Addrecipe() {
  const formik = useFormik({
    initialValues: {
      recipeName: "",
      description: "",
    //   ingredients : [],
      instructions: "",
      image: "",
      menu:"",
      author:""
    },
    validate: (values) => {
      let errors = {};
      if (values.recipeName === "") {
        errors.recipeName = "Please enter Name "
      }
      if (values.description === "") {
        errors.description = "Please enter description"
      }
    //   if (values.ingredients === "") {
    //     errors.ingredients = "Please enter ingredients"
    //   }
      if (values.instructions === "") {
        errors.instructions = "Please enter instructions"
      }
      if (values.image === "") {
        errors.image = "Please enter image url"
      }
      if (values.menu === "") {
        errors.menu = "Please enter menu"
      }
      if (values.author === "") {
        errors.author = "Please enter author name"
      }
      return errors;
    },
    onSubmit: async (values) => {
      let users = await axios.post(`${env.api}/createrecipes`, values);
      alert("Recipe Created");
    }


  })
  return (
    <>
      <div className='container bg-transparent'>
        <div className="d-sm-flex align-items-center justify-content-center mb-4">
          <h1 className="h3 mb-0 pt-5 text-dark-800">Create Recipe Form</h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className='row justify-content-center'>
            <div className='col-lg-8 p-2'>
              <label>Recipe Name</label>
              <input
                className={`form-control ${formik.errors.recipeName ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.recipeName}
                onChange={formik.handleChange}
                name="recipeName"
              />
              <span style={{ color: "red" }}>{formik.errors.recipeName}</span>
            </div>
            <div className='col-lg-8 p-2'>
              <label>Description</label>
              <input
                className={`form-control ${formik.errors.description ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.description}
                onChange={formik.handleChange}
                name="description"
              />
              <span style={{ color: "red" }}>{formik.errors.description}</span>
            </div>
            {/* <div className='col-lg-8 p-2'>
              <label>Ingredients</label>
              <input
                className={`form-control ${formik.errors.ingredients ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.ingredients}
                onChange={formik.handleChange}
                name="ingredients"
              />
              <span style={{ color: "red" }}>{formik.errors.ingredients}</span>
            </div> */}
            <div className='col-lg-8 p-2'>
              <label>Instructions</label>
              <input
                className={`form-control ${formik.errors.instructions ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.instructions}
                onChange={formik.handleChange}
                name="instructions"
              />
              <span style={{ color: "red" }}>{formik.errors.instructions}</span>
            </div>
            <div className='col-lg-8 p-2'>
              <label>Image URL</label>
              <input
                className={`form-control ${formik.errors.image ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.image}
                onChange={formik.handleChange}
                name="image"
              />
              <span style={{ color: "red" }}>{formik.errors.image}</span>
            </div>
            <div className='col-lg-8 p-2'>
              <label>Menu</label>
              <input
                className={`form-control ${formik.errors.menu ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.menu}
                onChange={formik.handleChange}
                name="menu"
              />
              <span style={{ color: "red" }}>{formik.errors.menu}</span>
            </div>
            <div className='col-lg-8 p-2'>
              <label>Author Name</label>
              <input
                className={`form-control ${formik.errors.author ? `input-error` : ``}`}
                type={'text'}
                value={formik.values.author}
                onChange={formik.handleChange}
                name="author"
              />
              <span style={{ color: "red" }}>{formik.errors.author}</span>
            </div>
            <div className='col-lg-8 mt-2 text-center pb-5'>

              <input
                className='btn btn-outline-dark px-3  '
                type={'submit'}
                value='Submit'
                disabled={!formik.isValid}
              />

            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default Addrecipe;