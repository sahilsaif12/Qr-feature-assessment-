import React, { useEffect, useRef, useState } from 'react'

function ColorChoose({ setShowModal }) {
    const ref = useRef('')
    const ref_p = useRef('')
    const [progress, setprogress] = useState(0)
    const [showProgress, setshowProgress] = useState('')
    const interval = useRef('')
    const timeout = useRef('')
    useEffect(() => {
        ref.current.click()
        setprogress(0)
    }, [])

    const handleDownload = async (color) => {
        if (color == 'g') setshowProgress('g')
        if (color == 'b') setshowProgress('b')
        if (color == 'r') setshowProgress('r')
        if (color == 'y') setshowProgress('y')

        interval.current = setInterval(() => {
            // let p=progress+3.33
            setprogress((prev) => {
                let p = prev + 3.33
                return p
            })
            // ref_p.current.value=p
        }, 100);

        timeout.current = setTimeout(() => {
            clearInterval(interval);
            setShowModal(false)
        }, 3000);

    }

    const stopLoading = () => {
        clearInterval(interval.current)
        clearTimeout(timeout.current)
        setprogress(0)
        setshowProgress('')
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hidden" ref={ref} onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold border-b-2 pb-2 border-b-gray-600 text-lg">Select your QR colour</h3>
                    <div className="flex justify-around mt-4 min-h-32" >
                        <div >
                            <svg onClick={() => handleDownload('g')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#14ff34" class="w-14 h-16">
                                <path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z" clip-rule="evenodd" />
                                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
                            </svg>
                            {showProgress == 'g' &&
                                <div>
                                    <progress ref={ref_p} className="progress progress-success w-19" value={progress} max="100"></progress>
                                    <div onClick={stopLoading} className="text-red-300 text-center cursor-pointer text-sm ">cancel</div>
                                </div>
                            }
                        </div>
                        <div>
                            <svg onClick={() => handleDownload('r')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff1c46" class="w-14 h-16">
                                <path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z" clip-rule="evenodd" />
                                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
                            </svg>
                            {showProgress == 'r' &&
                                <div>
                                    <progress ref={ref_p} className="progress progress-error w-19" value={progress} max="100"></progress>
                                    <div onClick={stopLoading} className="text-red-300 text-center cursor-pointer text-sm ">cancel</div>
                                </div>

                            }
                        </div>
                        <div>
                            <svg onClick={() => handleDownload('y')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fffb14" class="w-14 h-16">
                                <path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z" clip-rule="evenodd" />
                                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
                            </svg>
                            {showProgress == 'y' &&
                                <div>
                                    <progress ref={ref_p} className="progress progress-warning w-19" value={progress} max="100"></progress>
                                    <div onClick={stopLoading} className="text-red-300 text-center cursor-pointer text-sm ">cancel</div>
                                </div>
                            }
                        </div>
                        <div>
                            <svg onClick={() => handleDownload('b')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0d49ff" class="w-14 h-16">
                                <path fill-rule="evenodd" d="M9.75 6.75h-3a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3h7.5a3 3 0 0 0 3-3v-7.5a3 3 0 0 0-3-3h-3V1.5a.75.75 0 0 0-1.5 0v5.25Zm0 0h1.5v5.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V6.75Z" clip-rule="evenodd" />
                                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
                            </svg>
                            {showProgress == 'b' &&
                                <div>
                                    <progress ref={ref_p} className="progress progress-info w-19" value={progress} max="100"></progress>
                                    <div onClick={stopLoading} className="text-red-300 text-center cursor-pointer text-sm ">cancel</div>
                                </div>
                            }
                        </div>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => setShowModal(false)} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ColorChoose