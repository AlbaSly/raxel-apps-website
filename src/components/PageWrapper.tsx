import React from "react"
import { ReactComponent } from "../interfaces"

type PageWrapperProps = ReactComponent & {}
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      { children }
    </div>
  )
}

export default PageWrapper