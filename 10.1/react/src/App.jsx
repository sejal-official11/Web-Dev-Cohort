import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {


//   const routes = [{
//     path: "/neet/online-coaching-class-11",
//     element: <Class11Program/>

//   }, 
// {
//   path: "",
//   element: 
// }]



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />}/>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Layout() {
  return (
    <div style={{ height: "100vh", background: "green" }}>
      <Header />
      <div style={{ height: "90vh", background: "red" }}>
        <Outlet />
      </div>
      Footer | Contact us
    </div>
  );
}

function Header() {
  return (
    <div>
      <Link to="/">Allen</Link>|
      <Link to="/neet/online-coaching-class-11">Class 11</Link>|
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  );
}

function NoPage() {
  return <div>Sorry Page not found</div>;
}

function LandingPage() {
  return <div>Welcome to allen</div>;
}

function Class11Program() {
  return <div>NEET programs from Class 11th</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      NEET programs from Class 12th
      <button onClick={redirectUser}>GO back to Landing Page</button>
    </div>
  );
}

export default App;
