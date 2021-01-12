import React, {useState} from 'react';
import {TextInput} from "../components/Ulkit";

const SignUp = () => {

  const [username, setUsername] = useState(""),
        [email, setUsername] = useState(""),
        [password, setUsername] = useState(""),
        [confirmPassword, setUsername] = useState("");

  const inputUsername = useCallback((Event) => {
    setUsername(Event.target.value)
  }, [setUsername]);

  return(
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium"/>
      <TextInput
        fullWidth={} label={} multiline={} required={}
        rows={} value={} type={} onChange={}
      />
    </div>
  )
}

export default SignUp