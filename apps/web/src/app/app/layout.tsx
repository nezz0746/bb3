import { ModalProvider } from '@/context/ModalContext'
import AppProviders from './providers'
import AppNavbar from '@/components/AppNavbar'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppProviders>
        <ModalProvider>
          <div className="h-full antialiased">
            <AppNavbar />
            <main className="relative z-0">{children}</main>
          </div>
        </ModalProvider>
      </AppProviders>
    </>
  )
}

export default AppLayout
