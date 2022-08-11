import "./AddUser.css";
import { useNavigate } from 'react-router-dom'
import { Navbar } from "../../components";


export default function NewUser() {
    let navigate= useNavigate();
  return (
    
    <div className="newUser m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
<Navbar />
</div>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Melat" />
        </div>
      
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="melatKassaye@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone Number</label>
          <input type="text" placeholder="+251 963 121 212" />
        </div>
       
       
        <button onClick={() => { navigate("/customers")}} className="newUserButton">Create</button>
      </form>
    </div>
  );
}
