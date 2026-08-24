import { useMediaQuery } from "@/hooks/useMediaQuery";

export function useFinePointer() {
    return useMediaQuery("(pointer: fine)");
}
