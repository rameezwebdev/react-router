import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = () => {
  const navigation = useNavigation();
  if(navigation === 'loadong') return <h1>Loading</h1>

    return <>
      <Header />
      <Outlet />
      <Footer />
    </>
}