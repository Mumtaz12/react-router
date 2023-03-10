import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import {UserProfile} from "./components/User";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} exact />
                <Route path="/user/*" element={<User />} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

function Main() {
    return <h1>Main Landing Page</h1>;
}

function User() {
    function UserProfile() {
        const { id } = useParams();
        return <h2>User Profile:{id}</h2>;
    }
    return (
        <div>
            <h1>User</h1>
            <Routes>
                <Route path="/" element={< UserIndex />} />
                <Route path="profile/:id" element={<UserProfile />} />
            </Routes>
        </div>
    );}

function UserIndex() {
    return <h2>User Index page</h2>;
}



function Admin() {
    return (
        <div>
            <h1>Admin Page</h1>
            <Routes>
                <Route path="/" element={<AdminIndex />} />
                <Route path="users/" element={<UsersList />} />
            </Routes>
        </div>
    );
}

function AdminIndex() {
    return <h2>Admin List Page </h2>;
}

function UsersList() {
    const users = [
        { id: 1, name: 'mumtaz' },
        { id: 2, name: 'khaan' },
        { id: 3, name: 'alex' },
        { id: 4, name: 'mubashir' },
    ];

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map((user) =>
                        (
                    <li key={user.id} >
                        <a href={`/user/profile/${user.id}`}>{user.name}</a>
                    </li>
                        )
                )}
            </ul>
        </div>
    );
}

export default App;



// import {Main } from './components/Main'
// import {Admin} from "./components/Admin";
// import {User, UserProfile,UserIndex} from "./components/User";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';


// function App() {
//   return (
//       <BrowserRouter>
//           <Routes>
//               <Route path="/" element={<Main />} exact />
//               <Route path="/user" element={<User />}>
//                   <Route path="profile/:id" element={<UserProfile />} />
//               </Route>
//               <Route path="/admin" element={<Admin />}>
//                   <Route path="users" element={<h2>UsersList</h2>} />
//               </Route>
//           </Routes>
//       </BrowserRouter>
//   );
// }
// export default App;