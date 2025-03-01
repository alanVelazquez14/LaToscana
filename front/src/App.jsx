import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Reservations from "./views/Reservations/Reservations";
import { Toaster } from "sonner";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./views/About/About";
import NotFound from "./views/Not Found/NotFound";
import { useGlobalContext } from "./context/GlobalContext";
import { useEffect } from "react";
import Reservar from "./views/Reservar/Reservar";

function App() {
  const { user } = useGlobalContext();

  useEffect(() => {
    console.log(("user", user));
  }, [user]);

  return (
    <>
      <Toaster richColors />
      <Navbar />

      <div className="main-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />

          {user?.login ? (
            <>
              <Route path="/reservations" element={<Reservations />} />
              <Route
                path="/register"
                element={<Navigate to="/reservations" />}
              />
              <Route path="/reservas" element={<Reservar />} />
              <Route path="/login" element={<Navigate to="/reservations" />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reservations" element={<Login />} />
              <Route path="/reservas" element={<Navigate to="/login" />} />
            </>
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
