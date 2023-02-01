import axios from 'axios'

export const emailValidator=(email,errors, setErrors)=>{
  let err=errors;

  if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
          err.email=true
            setErrors(err)

        return "Incorrect email format";
      }
    else{
        
        axios.get(`http://localhost:8080/users/check/{email}`).then(res=>{
            if(res.status===409){
              err.email=true

              setErrors(err)

                return "Email already exists";
            }
            else {
              err.email=false

              setErrors(err)
              return ""};

        })
    }
    err.email=false

    setErrors(err)
    return "";

}
export const passwordValidator=(password, errors, setErrors)=>{
  let err=errors;

    if (password==="") {
      err.password=true
      setErrors(err)

        return "Password is required";
      } else if (password.length < 8) {
        err.password=true

        setErrors(err)

        return "Password must have a minimum 8 characters";
      }
      err.password=false

      setErrors(err)

      return "";
}
export const phoneValidator=(phone, errors, setErrors)=>{
  let err=errors;

    if (phone==="") {
      err.phone=true
      setErrors(err)

        return "Phone number is required";
      } else if (phone.length < 8) {
        err.phone=true
        setErrors(err)

        return "Phone too short";

      }
      err.phone=false
      setErrors(err)

      return "";
}

export const nameValidator=(username,errors, setErrors)=>{
  let err=errors;
    if (username==="") {
      err.username=true;
      setErrors(err)

        return "user name  is required";
      } else if (username.length<3) {
        err.username=true
        setErrors(err)

        return "user name  must have a minimum 3 characters";
      } 
        err.username=false;
        setErrors(err)

      return "";
}