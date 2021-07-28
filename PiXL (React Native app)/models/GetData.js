import React, {useState} from 'react'
import axios from "axios";

const getData = async (userInput, page) => {

    let tmp = await axios.get("http://51.178.86.48:3000/data/get-data/" + userInput + "/" + page)
    return (
        tmp.data
)}

export default getData