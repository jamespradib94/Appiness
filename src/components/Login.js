import React from 'react'
import { Field, reduxForm,SubmissionError } from 'redux-form'
import {connect} from 'react-redux'

const renderField = ({ input, type, meta: { touched, error } }) => (
    <div>
        <input {...input}  type={type} />
        {touched && error && <span>{error}</span>}
    </div>
  )

const LoginForm = props => {
    
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit(myValidate)}>
      <div>
        <label>User Name</label>
        
        <div>
          <Field
            name="username" type="text" component={renderField} placeholder="Username"label="User Name" />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password" type="password" component={renderField} placeholder="Password" label="Password"/>
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Login
        </button>
      </div>
    </form>
  )
}


const myValidate=(values) =>{ 
return (
  import('../Validate.json').then(res=>{
      if((values.username!==res.default.username)&&(values.password!==res.default.password)){
          throw new SubmissionError  ({
          password:'   Username and password is incorrect'
          })
      }
      if(values.username!==res.default.username)
      {
          throw new SubmissionError  ({
              password:'Username is incorrect'
          })
      }
      if(values.password!==res.default.password)
      {
          throw new SubmissionError  ({
              password:'password is incorrect'
          })
      }
    }
)
)
}

const mapDispatchToProps=dispatch=>{
  return {
  onSubmit:()=>dispatch({type:'SUBMIT'})
}
}



export default connect(null,mapDispatchToProps)(reduxForm({
    form: 'login', 
     onSubmit:values=>values,
     onSubmitSuccess:(values,dispatch)=>dispatch(formSuccess(values))
  })(LoginForm))

  export const SUCCESS='LoginForm/SUCCESS'
  export const formSuccess=value=>({type:SUCCESS
  })