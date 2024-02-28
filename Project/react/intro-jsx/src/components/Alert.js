import React from 'react'

export default function Alert(props) {
    const capitalizeFirstLetter = (word) => {
        // Check if the word is not empty
        if (word.length > 0) {
          // Capitalize the first character and concatenate it with the rest of the word
          return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
          // If the word is empty, return an empty string
          return '';
        }
      }
  return (
    <div className='container'>
      props.alert && <div className={`alert alert-${ props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{capitalizeFirstLetter(props.alert.type)}</strong> {props.alert.msg}   
</div>

    </div>
  )
}
