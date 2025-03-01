import React, { useState } from "react";
import { NavbarStyled, LinksStyled, BorderLinks } from "./NavbarStyles";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../helpers/routes";
import { useGlobalContext } from "../../context/GlobalContext";
import Modal from "../Modal/Modal";

export const Navbar = () => {
  const { user, logout } = useGlobalContext();
  const location = useLocation();
  const [showLogoutModal, setShowLogoutModal] = useState(false);


  const checkActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <NavbarStyled>
      <LinksStyled>
        <Link to={routes.home} className={checkActive(routes.home)}>
          HOME
        </Link>
      </LinksStyled>
      <LinksStyled>
        <Link to={routes.about} className={checkActive(routes.about)}>
          NUESTRA HISTORIA
        </Link>
      </LinksStyled>
      <LinksStyled className="no-underline">
        {user?.login && (
          <Link>
            <BorderLinks
              to={routes.reservations}
              className={checkActive(routes.reservations)}
              style={{ padding: "10px 15px" }}
            >
              MIS RESERVAS
            </BorderLinks>
          </Link>
        )}
      </LinksStyled>
      {user?.login && (
        <LinksStyled>
          <Link to={routes.reservas} className={checkActive(routes.reservas)}>
            RESERVA AHORA
          </Link>
        </LinksStyled>
      )}
      {!user?.login && (
        <LinksStyled>
          <Link to={routes.login} className={checkActive(routes.login)}>
            INGRESA
          </Link>
        </LinksStyled>
      )}
      {user?.login && (
        <LinksStyled>
          <Link
            to={routes.login}
            className={checkActive(routes.login)}
            onClick={() => setShowLogoutModal(true)}
          >
            CERRAR SESIÓN
          </Link>
        </LinksStyled>
      )}

      {showLogoutModal && (
        <Modal
          mensaje="¿Estás seguro de que quieres cerrar sesión?"
          onConfirm={() => {
            logout();
            setShowLogoutModal(false);
          }}
          onCancel={() => setShowLogoutModal(false)}
        />
      )}
    </NavbarStyled>
  );
};
