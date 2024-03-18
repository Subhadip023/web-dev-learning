'use client'
import Image from "next/image";

export default function Home() {
  const handelsubmit =async()=>{
    let data={
      name:'subadip',
      role:'Programmer'
    }
    let a= await fetch('/api/add',{
      method:'POST',headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }
  return (
   <>
   <h1 className="text-xl font-bold">next js api route demo </h1>
   <button onClick={handelsubmit}>submit</button>
   </>
  );
}
