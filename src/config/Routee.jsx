// import { BrowserRouter, Route, Routes, } from 'react-router-dom'
// import { auth, onAuthStateChanged } from "../config/firebase";

// import Home from '../pages/Home'
// import About from '../pages/About'
// import Contact from '../pages/Contact'
// import Services from '../pages/Services'
// import Login from '../pages/Login'
// import Signup from '../pages/Signup'
// import Header from '../components/Header/Header'
// import Notfound from '../pages/Notfound'
// import { useEffect, useState } from 'react';
// import Profile from '../pages/Profile';

// function Routee() {
//     let [user, setUser] = useState(null)
//     let [loading, setLoading] = useState(true);


//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 if (!user) {
//                     return <h1>loading...</h1>
//                 }
//                 const uid = user.uid;
//                 console.log(uid);
//                 setUser(true)

//             } else {
//                 setUser(false)
//                 console.log("login nai hai");

//             }
//             setLoading(false)
//         });
//     }, [])
//     if (loading) {
//         return <h1>loading...</h1>
//     }

//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path='/contact' element={<Contact />} />
//                 <Route path='/services' element={<Services />} />
//                 <Route path='/login' element={user ? <Profile /> : <Login />} />
//                 <Route path='/signup' element={<Signup />} />
//                 <Route path='/profile' element={!user ? <Login /> : <Profile />} />
//                 <Route path='*' element={<Notfound />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default Routee



import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { auth, onAuthStateChanged } from "../config/firebase";

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Header from '../components/Header/Header'
import Notfound from '../pages/Notfound'
import { useEffect, useState } from 'react';
import Profile from '../pages/Profile';

function Routee() {
    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (!user) {
                    return <h1>loading...</h1>
                }
                const uid = user.uid;
                console.log(uid);
                setUser(true)

            } else {
                setUser(false)
                console.log("login nai hai");

            }
            setLoading(false)
        });
    }, [])
    if (loading) {
        return <h1>loading...</h1>
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                <Route path='/login' element={user ? <Navigate to="/profile" /> : <Login />} />
                <Route path='/signup' element={user ? <Navigate to="/profile" /> : <Signup />} />
                <Route path='/profile' element={!user ? <Navigate to="/login" /> : <Profile />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routee