import React, { useState } from "react";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="flex items-center justify-center">
            <button className= 'text-center text-white px-6 py-3 rounded-lg my-5 bg-[#046592] font-medium'  type="button"
                    onClick={() => setShowModal(true)}> Apply Now</button>
               
            </div>
            {showModal && (
                <div className="fixed inset-0 z-10 overflow-y-auto text-black">
                    <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={closeModal}
                    ></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <button
                    className="float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                  </button>
                            <div className="mt-3 sm:flex float-clear">
                      
                                <div className="mt-2 text-center sm:ml-4">
                                   
                                    <p className="mt-2 text-2xl leading-relaxed">
                                    Send resumes to careers@itlabsinc.com  
                                    </p>
                                    <div className="items-center gap-2 mt-3 sm:flex">
                                        {/* <button
                                            className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button> */}
                                        <button
                                            className="w-full mt-2 p-2.5 flex-1 text-white px-16 py-4 rounded-2xl my-5 bg-[#046592] font-600"
                                            onClick={closeModal}
                                        >
                                            Ok
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}