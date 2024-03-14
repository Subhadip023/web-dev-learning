"use client"
import Image from "next/image";
import {useState} from 'react'
export default function Home() {
  const [Count, setCount] = useState(0)  
  return (
<div>
  I'm a Componets {Count} <br />
  <button onClick={()=> setCount(Count+1)}> click me</button>
</div>
  );
}
