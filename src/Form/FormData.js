import React from 'react'

export default function FormData({ setName, setEmail, setMobile, setDob, setAddress, setGender, setMaritalStatus, setCountry, setState, setPincode, nameErr, emailErr, mobileErr, dobErr, addressErr, genderErr, statusErr, countryErr, stateErr, pincodeErr }) {

    return (
        <div>
            <form>
                <table className="table table-hover mt-3">
                    <tbody>
                        {/* Name Field */}
                        <tr>
                            <th><label htmlFor="fname"> Name : </label></th>
                            <td>
                                <input type="text" id="fname" name="fname" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} className="form-control" />
                                <div className="error" id="fnameError">{nameErr}</div>
                            </td>
                        </tr>
                        {/* Email ID Field */}
                        <tr>
                            <th><label htmlFor="email"> Email ID : </label></th>
                            <td>
                                <input type="email" id="email" name="email" placeholder="Enter Your Email ID" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                <div className="error" id="emailError">{emailErr}</div>
                            </td>
                        </tr>
                        {/* Mobile Number Field */}
                        <tr>
                            <th><label htmlFor="mobile"> Mobile Number : </label></th>
                            <td>
                                <input type="tel" id="mobile" name="mobile" placeholder="Enter Your Mobile No" onChange={(e) => setMobile(e.target.value)} className="form-control" />
                                <div className="error" id="mobileError">{mobileErr}</div>
                            </td>
                        </tr>
                        {/* Date of Birth Field */}
                        <tr>
                            <th><label htmlFor="dob"> Date of Birth : </label></th>
                            <td>
                                <input type="date" id="dob" name="dob" placeholder="Enter Your Date of Birth" onChange={(e) => setDob(e.target.value)} className="form-control" />
                                <div className="error" id="dobError">{dobErr}</div>
                            </td>
                        </tr>
                        {/* Address Field */}
                        <tr>
                            <th><label htmlFor="address"> Address : </label></th>
                            <td>
                                <textarea name="address" id="address" cols="30" rows="3" placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)} className="form-control"></textarea>
                                <div className="error" id="addressError">{addressErr}</div>
                            </td>
                        </tr>
                        {/* Gender Field */}
                        <tr>
                            <th>
                                <label htmlFor="gender">Select gender</label>
                            </th>
                            <td>
                                <select id="gender" onChange={(e) => {
                                    setGender(e.target.options[e.target.selectedIndex].text)
                                    console.log(e.target.options[e.target.selectedIndex].text)
                                }} className="form-select" >
                                    <option value=""></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="error" id="addressError">{genderErr}</div>
                            </td>
                        </tr>
                        {/* Marital Status Field */}
                        <tr>
                            <th><label htmlFor="status"> Marital Status : </label></th>
                            <td>
                                <select name="status" id="status" onChange={(e) => setMaritalStatus(e.target.options[e.target.selectedIndex].text)} className="form-select">
                                    <option value="select"></option>
                                    <option value="single"> Single </option>
                                    <option value="married"> Married </option>
                                    <option value="widowed"> Widowed </option>
                                    <option value="divorced"> Divorced </option>
                                    <option value="separated"> Separated </option>
                                </select>
                                <div className="error" id="statusError">{statusErr}</div>
                            </td>
                        </tr>
                        {/* Country Field */}
                        <tr>
                            <th><label htmlFor="country"> Country </label></th>
                            <td>
                                <select name="country" id="country" onChange={(e) => setCountry(e.target.options[e.target.selectedIndex].text)} className="form-select">
                                    <option value="select"></option>
                                    <option value="australia"> Australia </option>
                                    <option value="france"> Frnace </option>
                                    { /*    <!-- <option value="india" selected> India </option> -->*/}
                                    <option value="india"> India </option>
                                    <option value="uk"> UK </option>
                                    <option value="us"> US </option>
                                </select>
                                <div className="error" id="countryError">{countryErr}</div>
                            </td>
                        </tr>
                        {/* State Field */}
                        <tr>
                            <th><label htmlFor="state"> State : </label></th>
                            <td>
                                <select name="state" id="state" onChange={(e) => setState(e.target.options[e.target.selectedIndex].text)} className="form-select">
                                    <option value="select"></option>
                                    <option value="andhra pradesh"> Andra Pradesh</option>
                                    <option value="assam"> Assam </option>
                                    <option value="bihar"> Bihar </option>
                                    <option value="karnataka"> Karnataka </option>
                                    <option value="madhya pradesh"> Madhya Pradesh </option>
                                    <option value="maharashtra"> Maharashtra </option>
                                    <option value="uttar pradesh"> Uttar Pradesh </option>
                                    <option value="west bengal"> West Bengal </option>
                                </select>
                                <div className="error" id="stateError">{stateErr}</div>
                            </td>
                        </tr>
                        {/* Pincode Field */}
                        <tr>
                            <th><label htmlFor="pincode"> Pincode : </label></th>
                            <td>
                                <input type="number" id="pincode" name="pincode" placeholder="Enter Your Pincode" onChange={(e) => setPincode(e.target.value)} className="form-control" />
                                <div className="error" id="pincodeError">{pincodeErr}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
