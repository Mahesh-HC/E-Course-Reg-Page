import React, { useState } from 'react'
import FormData from './FormData'
import { useNavigate } from 'react-router-dom'

export default function FormValidation() {
    const [name, setName] = useState("")
    const [nameErr, setNameErr] = useState('')
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState('')
    const [mobile, setMobile] = useState("")
    const [mobileErr, setMobileErr] = useState('')
    const [dob, setDob] = useState("")
    const [dobErr, setDobErr] = useState('')
    const [address, setAddress] = useState("")
    const [addressErr, setAddressErr] = useState('')
    const [gender, setGender] = useState("")
    const [genderErr, setGenderErr] = useState('')
    const [maritalStatus, setMaritalStatus] = useState("")
    const [statusErr, setStatusErr] = useState('')
    const [country, setCountry] = useState("")
    const [countryErr, setCountryErr] = useState('')
    const [state, setState] = useState("")
    const [stateErr, setStateErr] = useState('')
    const [pincode, setPincode] = useState("")
    const [pincodeErr, setPincodeErr] = useState('')

    const setNavigation = useNavigate()
    const inputValidation = () => {
        let mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        if (name === "") {
            setNameErr('Plese enter your Name')
            return false
        }
        else {
            setNameErr('')
        }
        if (email === "") {
            setEmailErr('Please enter your Email ID')
            return false
        }
        else if (!email.match(mailFormat)) {
            setEmailErr('Please Enter your valid Email ID')
            return false
        }
        else {
            setEmailErr('')
        }
        if (mobile === "") {
            setMobileErr('Please enter your Phone Number')
            return false
        }
        else if (mobile.length !== 10) {
            setMobileErr('Please enter Valid Phone Number')
            return false
        }
        else {
            setMobileErr('')
        }
        if (dob === "") {
            setDobErr('Please enter your Date of Birth')
            return false
        }
        else {
            setDobErr('')
        }
        if (address === "") {
            setAddressErr('Please enter your Address')
            return false
        }
        else {
            setAddressErr('')
        }
        if (gender === "") {
            setGenderErr('Please select your Gender')
            return false
        }
        else {
            setGenderErr('')
        }
        if (maritalStatus === "") {
            setStatusErr('Please choose your Marital Status')
            return false
        }
        else {
            setStatusErr('')
        }
        if (country === "") {
            setCountryErr('Please choose your Country')
            return false
        }
        else {
            setCountryErr('')
        }
        if (state === "") {
            setStateErr('Please choose your State')
            return false
        }
        else {
            setStateErr('')
        }
        if (pincode === "") {
            setPincodeErr('Please enter your Pincode')
            return false
        }
        else {
            setPincodeErr('')
            return true
        }
    }

    return (
        <div>
            <div className="container d-flex flex-column align-items-center ">
                <h3 className='mt-4'>E-Course Registration Page</h3>
                <FormData setName={setName} setEmail={setEmail} setMobile={setMobile} setDob={setDob} setAddress={setAddress} setGender={setGender} setMaritalStatus={setMaritalStatus} setCountry={setCountry} setState={setState} setPincode={setPincode} nameErr={nameErr} emailErr={emailErr} mobileErr={mobileErr} dobErr={dobErr} addressErr={addressErr} genderErr={genderErr} statusErr={statusErr} countryErr={countryErr} stateErr={stateErr} pincodeErr={pincodeErr} />

                <div className='flex-row justify-content-center table table-hover' >
                    <button type="submit" className="btn btn-primary" style={{ marginRight: "20px" }} onClick={() => {
                        if (inputValidation()) {
                            alert("E-Course Form Registration is completed.")
                            setNavigation("/success")
                        } else {
                            alert("Please enter all details!")
                        }
                    }}> Submit </button>
                    <button type="reset" className="btn btn-primary"> Reset </button>
                </div>
            </div>
        </div>
    )
}
