import { vi } from 'vitest'
import '@testing-library/jest-dom/vitest'
import type { Auth, User, UserCredential, Unsubscribe } from 'firebase/auth'

vi.mock('firebase/app', () => {
  class FirebaseError extends Error {
    code: string
    constructor(code: string, message?: string) {
      super(message)
      this.name = 'FirebaseError'
      this.code = code
    }
  }
  return {
    initializeApp: vi.fn(() => ({})),
    getApps: vi.fn(() => []),
    FirebaseError,
  }
})


vi.mock('firebase/auth', () => {
  return {
    getAuth: vi.fn((): Auth => ({} as Auth)),
    onAuthStateChanged: vi.fn((a: Auth, cb: (u: User | null) => void): Unsubscribe => {
      void a
      cb(null)
      return () => {}
    }),
    signOut: vi.fn((a: Auth): Promise<void> => {
      void a
      return Promise.resolve()
    }),
    signInWithEmailAndPassword: vi.fn((a: Auth, email: string, password: string): Promise<UserCredential> => {
      void a; void email; void password
      return Promise.resolve({} as unknown as UserCredential)
    }),
    createUserWithEmailAndPassword: vi.fn((a: Auth, email: string, password: string): Promise<UserCredential> => {
      void a; void email; void password
      return Promise.resolve({} as unknown as UserCredential)
    }),
    sendPasswordResetEmail: vi.fn((a: Auth, email: string): Promise<void> => {
      void a; void email
      return Promise.resolve()
    }),
  }
})


vi.mock('next/navigation', () => {
  const router = {
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }
  return {
    useRouter: () => router,        
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
    redirect: vi.fn(),
  }
})
