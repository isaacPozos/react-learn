import { Helmet } from "react-helmet"
import { Navbar } from "../../ui"


export const DCPage = () => {
  return (
    <>
      <Helmet>
        <title>My DC Title</title>
      </Helmet>
      <Navbar />
      <div>DCPage</div>
    </>
  )
}
