import React, { useEffect, useState } from 'react'
import DocList from './DocList';

const Doctors = ({user}) => {
    // const [doctor, setDoctor]=useState([]);
    // useEffect(()=>{
    //     fetch("/docs")
    //     .then((r)=>r.json())
    //     .then((data)=>setDoctor(data))

    // },[])
    // const displayDoc=doctor.map((doc)=>(
    //  <DocList
    //  key={doc.id}
    //  username={doc.username}
    //  email={doc.email}
    //  description={doc.description}
    //  location={doc.location}
    //  userid={user.id}
    //  useremail={user.email}
    //  docid={doc.id}
    //  />

    // ))
  return (
    <div>
        {displayDoc}
    </div>
  )
}

export default Doctors