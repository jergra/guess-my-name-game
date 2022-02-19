import React from "react";

export const NotName = ({showNotName, wordString}) => {

  if (showNotName) {
  
    return (
    
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      >
        <div className="relative w-auto max-w-sm mx-auto my-6">
          {/*content*/}
          <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between rounded-t">
            </div>
            {/*body*/}
            <div className="relative flex-auto p-6">
               <div className="text-lg leading-relaxed text-blueGray-500">
                {wordString.substr(-4)} is not in the name list
              </div>
              </div>
            </div>
          </div>
        </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
} else {
      return null
}
}