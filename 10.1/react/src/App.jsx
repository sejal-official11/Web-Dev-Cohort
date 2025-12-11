import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Landing />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            ></Route>
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ErrorPage() {
  return <div> Sorry page not found </div>;
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to="/">Allen</Link>|
      <Link to="/neet/online-coaching-class-11">Class 11</Link>|
      <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
      Footer | Contact us
    </div>
  );
}

function Landing() {
  return <div>Welcome to Allen</div>;
}

function Class11Program() {
  return <div>NEET program for class 11</div>;
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      NEET program for class 12
      <button onClick={redirectUser}>Go back to landing page</button>
    </div>
  );
}

export default App;
