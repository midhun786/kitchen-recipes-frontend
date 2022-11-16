import React from 'react'


function Profile() {
 
    
    let name = window.localStorage.getItem("profile")
    let id = window.localStorage.getItem("id")
    let email = window.localStorage.getItem("email")
  return (
    <div className='container pt-5 mt-5'>
        <div class="card container border-light mb-3 bg-transparent" style= {{width: "30rem"}}>
  <div class="card-header text-center fs-3" style={{color:"#ff245b"}}>User Profile</div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">User Name  : {name}</li>
    <li class="list-group-item">User Id    : {id}</li>
    <li class="list-group-item">User Email : {email}</li>
  </ul>
  </div>
</div>
       
    </div>
  )
}

export default Profile