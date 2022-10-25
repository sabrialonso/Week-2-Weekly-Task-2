// import './App.css';
import React, { useState } from "react"

let validEmail = false
let validPassword = false
let validDOB = false
let validContact = false
let validName = false

// this two is in global scope. if it is in local scope, the boolean will always be false. LOCAL OVERRIGHT GLOBAL


const Form = props => {
    // this is how you create own state for functional component [email is variable to store value, set email is function that allow to store inside 'email' variable]
    const [name, setName] = useState()
    const [DOB, setDOB] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [password, setPassword] = useState()


    // const emailRegex = /(\w*)(@)(\w*)(\.)(\w*)$/ //declare everything on top for kemas purpose. must have @ and .
    const emailRegex = /(\w*)(@)(\w*)(\.)(\w*)$/
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const contactRegex = /\d{09}/
    const alphabetRegex = /^[a-zA-Z\s]+$/ //Regular Expression to match only alphabetic characters
    // eventhandler = something is listening to what we are doing and executing

    const handleSubmit = e => {
        e.preventDefault()

        if (validName && validDOB && validEmail && validContact && validPassword) {
             
            alert("Form successfully submitted!")
           

        }

        else {
            alert("Please complete all form")

        }
    }


    const handleValidation = (e) => {  //ES6 function skeleton SOP for handleValidation security guard
        switch (e.target.id) {

            case "email":

                if (e.target.value.match(emailRegex) || e.target.value === '') {

                    validEmail = true
                    document.getElementById("Error").innerHTML = ""
                    setEmail(e.target.value)

                } else {

                    document.getElementById("Error").innerHTML = "Please indicate your email correctly"

                    validEmail = false

                }

                break

            case "name":
                if (e.target.value.match(alphabetRegex) || e.target.value === "") {
                    document.getElementById("Error").innerHTML = ""
                    validName = true
                    setName(e.target.value)
                } else {
                    document.getElementById("Error").innerHTML = "No numbers or special character allowed"
                    validName = false
                }
                break

            case "DOB":
                let validateDate = e.target.value.split("-")
                if (validateDate[0] < 2018 && validateDate[0] > 1922) {
                    document.getElementById("Error").innerHTML = ""
                    validDOB = true
                    setDOB(e.target.value)
                } else {
                    document.getElementById("Error").innerHTML = "Please input your correct year of birth<br>(1922 - 2017)"
                    validDOB = false
                }
                break



            case "password":

                if (e.target.value.match(passwordRegex) || e.target.value === !'') {

                    document.getElementById("Error").innerHTML = ""

                    validPassword = true

                    setPassword(e.target.value)

                } else {

                    document.getElementById("Error").innerHTML = "Must have one uppercase and one number"

                    validPassword = false

                }

                break

            case "contact":
                if ((e.target.value.match(contactRegex) && e.target.value.length == 9) || e.target.value === "") {
                    document.getElementById("Error").innerHTML = ""
                    validContact = true
                    setContact(e.target.value)
                } else {
                    document.getElementById("Error").innerHTML = "Insert your 9 digit contact number"
                    validContact = false
                }
                break

            default:

                break;

        }

    }


    return (

        //•	Create signup form (name, age, dob, email, password, contact).
        <form>
            <br></br>
            <label>Please Enter Name</label><br></br><br></br>
            <input type="text" name='' id="name" placeholder="Please enter name" onChange={handleValidation}></input><br></br><br></br>

            <br></br>
            <label>Please Enter Date Of Birth</label><br></br><br></br>
            <input type="date" name='' id="DOB" onChange={handleValidation}></input><br></br><br></br>

            <br></br>
            <label>Please Enter Email</label><br></br><br></br>
            <input type="text" name='' id="email" placeholder="Please enter your email" onChange={handleValidation}></input><br></br><br></br>

            <br></br>
            <label>Please Enter Password</label><br></br><br></br>
            <input type="password" name='' id="password" placeholder="Please enter password" onChange={handleValidation}></input><br></br>

            <br></br>
            <label>Please Enter Contact Details</label><br></br><br></br>
            <input type="text" name='' id="contact" placeholder="Please enter your number" onChange={handleValidation}></input><br></br>
            <br></br>

            <button onClick={handleSubmit}>
                Submit
            </button>
            <p id="Error" style={{ color: "red" }}></p>


        </form>

    )

}



export default Form


{/* {/* import '../components/App.css';

import React, { useState } from "react"


// skeleton for all component
// // const ComponentName = () => { */}

{/* //   return (

//     <>  

//     </>

//   )

// }

// export default ComponentName */}

//onChange={handleValidation} is a security to listen

// {} is where we put all codes inside for switch executioncreate a form
//create a form
// Create a state.
// Add event handler
// Add validation
// pass data to parent 
// Display the data