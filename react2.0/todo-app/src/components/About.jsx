import React from 'react';

function About() {
  return (<>
    <div class="container px-5 py-24 mx-auto"> 
    <div class="container px-5 py-24 mx-auto">

      <h1 className="text-3xl font-bold mb-4">About iTask</h1>
      <p className="text-lg">iTask is a simple and intuitive todo application built using React.</p>
      <p className="text-lg">With iTask, you can easily manage your tasks, keeping track of everything you need to do.</p>
      <p className="text-lg">Key features include:</p>
      <ul className="list-disc pl-6 text-lg">
        <li>Add new tasks to your list</li>
        <li>Edit existing tasks to modify details</li>
        <li>Delete tasks you no longer need</li>
        <li>Mark tasks as completed to track your progress</li>
      </ul>
      <p className="text-lg">Stay organized and productive with iTask!</p>
    </div>
    </div>
  

</>
  );
}

export default About;
