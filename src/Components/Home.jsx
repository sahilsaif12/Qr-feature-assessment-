import React from 'react'
import { useState , Fragment} from 'react'
import { Listbox, Transition} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import homeImg from '../assets/home.png'
import QRCode from "react-qr-code";
import ColorChoose from './ColorChoose'

const items = [
  { id: 1, name: 'Shoes' },
  { id: 2, name: 'Dress' },
  { id: 3, name: 'Chocolate' },
  { id: 4, name: 'Toy', unavailable: true },
  { id: 5, name: 'Gift card' },
]

function Home() {
    const [selected, setSelected] = useState(items[0])
    const [title, settitle] = useState('')
    const [qr, setqr] = useState(false)
    const [showModal, setShowModal] = useState(false)
    
    const handleChange=(e) => {
        settitle(e.target.value) 
        setqr(false)
    }
  return (
    <div className=' w-screen min-h-screen' >
    <h2 className="text-2xl   mt-4 text-left">Create new QR code </h2>

    <div className="flex h-4/5 items-center justify-evenly  mt-11 w-full ">
    <div className='w-2/5 relative'>
        <div className="p-3 bg-neutral-900 shadow-2xl rounded-lg ">
            <h2 className="text-3xl mb-6">Title</h2>
            <input type="text" placeholder="Type here" value={title} onChange={handleChange} className="input mx-1  input-bordered input-accent min-w-full max-w-xs" />
            <p className="text-gray-400 mt-4">Only store stuff can see this title</p>
        </div>
        <div className="mt-9 p-3 bg-neutral-900 shadow-2xl rounded-lg">
        <div className="">
      <Listbox className="h-36 border-b border-b-gray-400"  value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button  className="relative w-full cursor-pointer rounded-lg bg-gray-950/80 border-teal-600  text-left shadow-md focus:outline-none focus-visible:border-indigo-800 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute  mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {items.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-slate-600 text-gray-100' : 'text-gray-300'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-500">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      <div className="flex mt-3 flex-col">
      <div className="flex my-2">

      <input type="radio" name="radio-4" className="radio mx-2 radio-accent" checked /> <label htmlFor=""> Link to product page</label> 
      </div>
      <div className="flex my-2">

<input type="radio" name="radio-4" className="radio mx-2 radio-accent" /> Link to checkout page with product in the cart
      </div>

      </div>
    </div>
        </div>
      <button disabled={  title=="" || qr } onClick={()=>setqr(true)}  className="w-20 mt-4 disabled:text-gray-300 absolute right-5 text-lg text-gray-300 btn p-2 rounded-md text-center cursor-pointer bg-teal-800 hover:bg-green-800 hover:border-teal-400 hover:border disabled:bg-gray-500 disabled:pointer-events-none ">Save</button>
    </div>
    <div className="w-1/5 ">
        <div className="p-6 bg-neutral-900 shadow-2xl rounded-lg ">
        <h2 className="text-2xl my-2">QR Code</h2>
        <div className="flex justify-center items-center  my-3  min-h-48">
        {qr &&
        <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={`title: ${title}, item: ${selected.name}`}
    viewBox={`0 0 256 256`}
    />}
        </div>
        <button disabled={!qr} onClick={()=>setShowModal(true)}  className="btn-block p-2 rounded-md text-center cursor-pointer bg-teal-800 hover:bg-green-800 hover:border-teal-400 hover:border disabled:bg-gray-500 disabled:pointer-events-none ">Download</button>
        
        </div>
    {showModal && <ColorChoose setShowModal={setShowModal}/>}
    </div>
    </div>
  
    </div>
  )
}

export default Home