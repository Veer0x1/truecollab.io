import React, { FunctionComponent } from "react"

import SignupComponent from "@/app/signup/components/SignupComponent"

interface OwnProps {}

type Props = OwnProps

const page: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <SignupComponent />
        </div>
      </div>
    </>
  )
}

export default page
