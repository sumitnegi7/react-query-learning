import axios from 'axios';
import React from 'react'
import {useQuery} from "react-query";

const fetchUserByEmail = (email)=> {
  return  axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCouresByChannelId = (channelId)=> {
  return  axios.get(`http://localhost:4000/users/${channelId}`)
}

export const DependentParallelPage = ({email}) => {
 const {data: user}= useQuery(['user',email], ()=> fetchUserByEmail(email))
 const channelId = user?.data.channelId

 const {data: channels} = useQuery(['courses',channelId],()=> fetchCouresByChannelId(channelId),{
  enabled:!!channelId
 })
  return (
    <div>DynamicParallelPage</div>
  )
}
