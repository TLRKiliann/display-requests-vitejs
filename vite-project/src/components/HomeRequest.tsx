import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import serviceLogin from '../services/serviceLogin'

//import Cookies from 'universal-cookie'
import UsernameComp from './UsernameComp'
import PasswordComp from './PasswordComp'

type Field = {
  value?: any
  error?: string
  isValid?: boolean
}

type Form = {
  username: Field
  password: Field
}

type StatusProps = {
  username: string;
  status: string;
}

type VerifyProps = {
  id: number;
  username: string;
  password: string;
  status: string;
}[]

const HomeRequest:React.FC = () => {

  //const cookies = new Cookies();
  //const Navigate = useNavigate()
  
  const [form, setForm] = useState<Form>({
    username: {value: ''},
    password: {value: ''}
  })

  const [datas, setDatas] = useState<VerifyProps>([])
  const [message, setMessage] = useState<string>('Not connected !')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name
    const fieldValue: string = e.target.value
    const newField: Field = { [fieldName]: { value: fieldValue } }

    setForm({ ...form, ...newField })
  }

  const validateForm = () => {
    let newForm: Form = form

    // Validator username
    if (form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.'
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false }
      newForm = { ...newForm, ...{ username: newField } }
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true }
      newForm = { ...newForm, ...{ username: newField } }
    }

    // Validator password
    if (form.password.value.length < 3) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.'
      const newField: Field = { value: form.password.value, error: errorMsg, isValid: false }
      newForm = { ...newForm, ...{ password: newField } }
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true }
      newForm = { ...newForm, ...{ password: newField } }
    }
    setForm(newForm)
    return newForm.username.isValid && newForm.password.isValid
  }

  /*useEffect(() => {
    const callFn = async() => {
      await serviceLogin
        .loginRequest()
        .then(data => {
          setDatas(data)
      })
      .catch((err) => {
        console.log("Error during catching of login data !", err.message)
        setDatas([])
      })
    }
    callFn();
    return () => console.log("+ useEffect done!")
  }, []);*/



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isFormValid = validateForm()
    if (isFormValid) {
      setMessage('👉  Tentative de connexion en cours ...')

      
      const statusData: StatusProps = {
        username: form.username.value,
        status: "admin",
      }
      serviceLogin
        .loginRequest(statusData)
        .then((data) => {
          console.log(data)
          setDatas(data)
          setMessage("👋 Welcome ADMIN !")
        })
        .catch((err) => {
          console.log("Error during catching of login data !", err.message);
          setMessage('🔐 You are not an admin ...')
        })
    }
  }

  return(
    <main className="login--main">

      <div className="login--container">
        
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="login--form"
        >
          <h1 className="form--title">Login</h1>

          {message && <div className="div--msg">
            <p className="connection--msg">
              {message}
            </p>
          </div>
          }

          <UsernameComp 
            value={form.username.value}
            handleInputChange={(e) => handleInputChange(e)}
            error={form.username.error}
          />

          <PasswordComp 
            value={form.password.value}
            handleInputChange={(e) => handleInputChange(e)}
            error={form.password.error}
          />
          
          <button type="submit" className="btn--submitlogin">
            Enter
          </button>
          {datas.map((data) => (
            <p key={data.id}>{data.username} - {data.password} - {data.status}</p>
          ))}

        </form>
      </div>

    </main>
  )
}

export default HomeRequest;
