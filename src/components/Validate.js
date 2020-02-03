import { SubmissionError } from 'redux-form'

const validate=(values) =>{
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
        else{
            console.log(values)
            return values
        }
    }
  )
 )
}

export default validate