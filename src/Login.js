// import { compareSync } from 'bcryptjs'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function Login() {

  let navigate = useNavigate()
  let { register, handleSubmit, formState: { errors } } = useForm()
  function handle(Obj) {
    fetch(`http://localhost:4000/Admins?username=${Obj.username}`,
      { method: "GET" })
      .then(res => res.json())
      .then(userArray => {
        if (userArray.length === 0)
          alert("Invalid username")
        else {
          // let result = compareSync(Obj.password, userArray[0].password)
          if (Obj.password === userArray[0].password)
            navigate(`/admindashboard/${Obj.username}`)
          else
            alert('Invalid password')
        }
      })
  }

  return (
    <div className='container-fluid' style={{ marginBottom: '232px' }}>
      <form onSubmit={handleSubmit(handle)}>
        <h1 className='text-primary-emphasis text-center mx-auto text-decoration-underline mb-3'>Login</h1>
        <div style={{ marginLeft: '27rem' }}>
          <label className='form-label'>Username</label>
          <input type='text' className='form-control w-50' {...register('username', { required: true })} />
          {errors.username?.type === 'required' && <p className='text-danger'>Required</p>}
          <label className='form-label'>Password</label>
          <input type='password' className='form-control w-50' {...register('password', { required: true })} />
          {errors.password?.type === 'required' && <p className='text-danger'>Required</p>}
        </div>
        <button className='btn btn-info mb-3 mx-auto d-block mt-3'>Login</button>
      </form>
    </div>
  )
}

export default Login