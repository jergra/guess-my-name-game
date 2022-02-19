import React from "react";

export const Rules = ({showRules, handleClose}) => {

  if (showRules) {
  
    return (
      
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative max-w-lg my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                
                <div className="flex flex-col items-start mx-6 my-3">
                  <div className="text-3xl font-semibold">How To Play</div>
                  <p className="mt-2 text-blueGray-500">Guess the name in 5 tries.</p>
                  <p className="text-blueGray-500">Each guess must be a valid 4 letter name.</p>
                  <p className="text-blueGray-500">Hit the enter button to submit.</p>
                  <p className="text-blueGray-500">If a tile has changed color, that letter is in the name.</p>
                  <div className="mt-2 font-bold">Examples</div>
                  <div className="flex flex-col items-start mt-2">
                    <div className="flex">
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >K</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-center text-white bg-blue-500 rounded w-7 h-7"
                      >A</div>
                      <div
                        className="flex justify-center items-center m-1 font-bold text-white bg-[#c9b458] rounded w-7 h-7"
                      >T</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >E</div>
                    </div>
                    <p className="text-blueGray-500">The letter <b>T</b> is in the name but in the wrong spot.</p>
                    <p className="text-blueGray-500">The letters <b>K</b>, <b>A</b>, and <b>E</b> are not in the name.</p>
                    <div className="flex mt-2">
                      <div
                        className="flex justify-center items-center m-1 font-bold text-white bg-[#6aaa64] rounded w-7 h-7"
                      >B</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >R</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >A</div>
                      <div
                        className="flex items-center justify-center m-1 font-bold text-white bg-blue-500 rounded w-7 h-7"
                      >D</div>
                    </div>
                    <p className="text-blueGray-500">The letter <b>B</b>  is in the correct spot.</p>
                    <p className="text-blueGray-500">The letters <b>R</b>, <b>A</b>, and <b>D</b> are not in the name.</p>
                    
                  </div>
                </div>
    
                <div className="flex items-center justify-end rounded-b">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => handleClose(false)}
                  >
                    Close
                  </button>
                </div>
              
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  )
  } else {return null}
}
  
  
// export default function Modal() {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <>
//       <button
//         className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         Open small modal
//       </button>
//       {showModal ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-sm">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between rounded-t">
//                   {/* <h3 className="text-3xl font-semibold">
//                     Modal Title
//                   </h3> */}
//                   {/* <button
//                     className="ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button> */}
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="text-blueGray-500 text-lg leading-relaxed">
//                     HHHH is not in the name list
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 {/* <div className="flex items-center justify-end rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }
