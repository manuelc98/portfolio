import React, {useState} from 'react'
import axios from "axios";

const getInfoOnConv = async (convId) => {

    let tmp = await axios.get("http://51.178.86.48:3000/conversation/get-info/" + convId)
    return (
        tmp.data
)}

export default getInfoOnConv