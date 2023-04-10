import {Helmet} from "react-helmet";

import { Navbar } from "../../ui";

export const MarvelPage = () => {
  return (
    <>
      <Helmet>
        <title>My Marvel Title</title>
      </Helmet>
      <Navbar />
      <div>MarvelPage</div>
    </>
  )
}
