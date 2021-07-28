import React, {useState} from 'react'
import axios from "axios";

const getTelInfo = async (id) => {

    let tmp = await axios.get("http://51.178.86.48:3000/data/get-info/" + id)
    return (
        tmp.data
)}

export default getTelInfo