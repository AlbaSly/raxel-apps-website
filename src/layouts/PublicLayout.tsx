import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PageLoader from '../components/PageLoader'
import BackgroundStylesHandler from '../components/BackgroundStylesHandler'

const PublicLayout = () => {

  return (
    <>
      <Header />

      <main className='flex-grow'>
        <Suspense fallback={<PageLoader />}>
          <BackgroundStylesHandler>
            <Outlet />
          </BackgroundStylesHandler>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default PublicLayout