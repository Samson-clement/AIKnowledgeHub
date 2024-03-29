import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, BugAntIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Handwriting', href: '/image-to-text', current: false },
  { name: 'Text to Image', href: '/text-to-image', current: false },
  { name: 'Chat Model', href: '/chat', current: false },
  { name: 'Image Caption', href: '/image-caption', current: false },
  { name: 'Speech To Text', href: '/SpeechToText', current: false },
  { name: 'How AI Works', href: '/HowAiWorks', current: false },
  { name: 'History of AI', href: '/History', current: false },
  { name: 'Threats & Future', href: '/Future', current: false },
  { name: 'Start Working with AI', href: '/Start', current: false },
  { name: 'About', href: '/About', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-gradient-to-br from-darkblue to-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:justify-between md:items-stretch md:justify-start">
                <Link to="/" className="flex flex-shrink-0 items-center ml-18 md:ml-18 lg:ml-0 md:pr-20">
                  <img className="h-8 w-8 mr-1 text-white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEx0lEQVR4nO2aXagVVRTHx+4tu+pNH7LC0ELRIMonK0wJKvuEUAjBNAx6iHrR7KUEobLs3gyRAoPoIYp6CCzxI6kwAqFEUaLCSkKt1IwTmJ9lQf1ief6T2znzsWbOnHMh/D/dM3t97P/M3mutvfaNovP4nwGYBjwHfAQcAI4DfwM/AmuAscBlwKvATxo7BuwD1gGLbHwoCcwCdlCMb4HvCmT+AAaA4d0kcAHwMvCPJnEEeA24H5gEXAJcBEwFdgeT3a1nNtYPXC2dt4DTktkOjOkWEZu04S9gOTAqR3ZBQGR+jtwkkTB8Yi+rYwTkcPYZV819cItD/hrOYkqB7KjgCz5U68QTb+x54Gc5esCpNyYgMtohP0eyDWA1cGOd+2F5sIYNe8t8+liphL+9nIvNwIR2SPQCa4OoMmhLpYIdN5EYwERgicJ1HFBui6oAWCUjvwA3VDJSkUhi37whEyeBGVEZADMVXu1L3BQ8t9D5ovZKQ3/31kFEK2Al8CtwSHnF/A3TfkEJ1x+egc+l+EziuS2vJAZqImIvJYkXNNYDfKpnr3hJTA3W5YjEmL0pw83AvSmOWyZNedxjS0h/HwrsXKvy5ndXSaO6ybAmZSwmMkMlSieI3B4QOZiwtV7PH/MQ2SLhOSljtm4zl1YeEYfftGW7IiHzsJ6v8xA5KOGW2K3NN6Av05DznpqIxJu9oTmsMH8JGVtehj0eIhapDH2Fwq26lYk47ffL3AmPsG0mV0mRopuJqpMPYcFH5k5FRQiy6fWFwt0nMlnm9nuEN0l4bk3O05ZbmFj/S35Rsa2FMveex/GTEn7bm30rEBnMSn55MAKSXRSVOEMcTR4987JvSSJhYm1JfmkArtBhzpLiuFShFKXPqmTfEkQagZ04sTYK7CyV3AcuElJ6omr2bWNpDebY6FHXxXBfmdLZqkzDsrLZ10mkN1ElDORV0TQbGvExeKNVxB4iT0lhU5Xs6yHiGUsCGB9UHQ96FHZJeGZUA+oikmh+bI2KoA4JeW2eFJ1C5OmV8DNaKr95hE9JeGy3iHj1gZH6edIzqR2lokMby6cCkcn6uc8zqcUS3ult+1QlUtY28Lh+rvcoXgx8I4V3PY3lbhABxgUVwTyv8gTgByl9ZYrhAWqIiByo1BsGrgI+DAxZeT89Ja+E9VdLeyiLiLcA5Vy8Y4er0m9Dhqxlavg+5ehpE0lipZOIqwDl7N3K05UIBIZel6FHUsbC4s/qr5bij2LkFqA0W6eGje0S+UKGxhe0h7JaOLRTgNLcry0vqAqRPTJ0qbM9lGzhnEGKrqsApVkwGo60S2SDDC0saA9ltXCyiLgKUOAumdjWLpF58acFrqugn0rEqXulLlMNj1axERobFrQqrVX0kl0zeMNgGSI0a6mJOjWu0nHbsBW4sC0icjBcd+Z2Xg5xuOiQ4yGilxVf6yWxtvabXjUmngU+tlJajm51NNRyO5dmQzKnlTe2aP9Mq5VAhvO5cv51VskfbFTDHRkylwe13eyOTzzj4nJzsMSW2e2WDj99wJ1BvWbYL2J9kplu2TpIqu+7zuIdItOvZkAeNgTBIgvWeBs5JCQShO4G3lSotEjzp6rmxWrl9OifZ77U2FHJ2kXnrKGe/3lEHcC/O0SGkRoy2gwAAAAASUVORK5CYII=" alt="Logo" />
                  <span className='text-white font-bold max-md:text-xs'>Artificial Intelligence: A Knowledge Hub</span>
                </Link>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-7 md:flex-wrap mr-2" style={{width: 900}}>
                    {navigation.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          location.pathname === item.href ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 mx-1 py-1 text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', // Compare current location with item href
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
