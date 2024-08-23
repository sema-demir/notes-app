import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../types";

type LayoutPropsType = {
  notes: Note[];
};

const Layout = ({ notes }: LayoutPropsType) => {
  //URL den aldığı id ye göre dogru notu bulacak ve bu notun bilgsini cocuk route lara aktaracagız
  const { id } = useParams();
  const found = notes.find((n) => n.id === id);

  //Egerki note bulunmazsa anasayfaya yönlendir
  if (!found) return <Navigate to={"/"} />;
  return <Outlet context={found} />;
};

export default Layout;
