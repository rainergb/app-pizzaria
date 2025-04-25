import { Category } from "@/types/category";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { getCookieServer } from "@/lib/cookieServer";


export default function useGetCategory() {
    const [categories, setCategories] = useState<Category[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
    async function loadCategories(): Promise<void> {
        setIsLoading(true);
        setError(null);

        const token = await getCookieServer();
        if (!token) {
            setError("Token não encontrado");
            setIsLoading(false);
            return;
        }
        try {
            const response = await api.get<Category[]>("/category", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCategories(response.data);
            setIsLoading(false);
        } catch (err) {
            setError("Erro ao carregar categorias");
            setIsLoading(false);
        }
    }

    loadCategories();
    return () => {
        setCategories([]);
        setIsLoading(false);
        setError(null);
    }
}, []);

return {
    categories,
    isLoading,
    error
};
}