import { useMediaQuery } from "@/hooks/useMediaQuery";

// Framer Motion's own useReducedMotion() resolves the real matchMedia value
// synchronously on the client's first render, which can differ from the SSR
// default and trigger a hydration mismatch. useMediaQuery's useSyncExternalStore
// pattern (explicit getServerSnapshot) avoids that: SSR and the client's first
// paint both start from `false`, then reconcile safely after hydration.
export function usePrefersReducedMotion() {
    return useMediaQuery("(prefers-reduced-motion: reduce)");
}
