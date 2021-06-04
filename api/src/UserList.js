import React , {useState,useEffect} from 'react'
import axios from 'axios'
import CartUser from './CartUser'

const UserList = () => {
   const [user,setUser]=useState([])
   const [load,setLoad]=useState(true)
   

useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(res=>{setUser(res.data) 
                           setLoad(false)})
             .catch(err=>{console.log(err)})
    },[])

    return (
        <div  className='list'>
             {user.map(el=>
                  <CartUser  user={el}  key={el.id}  load={load} />
                )}
        </div>
    )
}

export default UserList

