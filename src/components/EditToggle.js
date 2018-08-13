import React from 'react';

// Functional component with no props
// export default function EditToggle() {
//   return (
//     <select className="dropDownContainer ml0">
//       <option value="true"> Allow Edit </option>
//       <option value="false"> Disable Edit </option>
//     </select>
//   )
// }

export default function EditToggle(props) {
  return (
    <select 
      className="dropDownContainer ml0" 
      onChange={(e)=> props.update(e.target.value)}
    >
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}