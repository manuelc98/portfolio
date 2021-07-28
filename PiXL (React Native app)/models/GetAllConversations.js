import React, {useState} from 'react'
import axios from "axios";

const getAllConversations = async (userInput) => {

    let tmp = await axios.get("http://51.178.86.48:3000/conversation/get-all-conv/" + userInput)
    return (
        tmp.data
)}

export default getAllConversations