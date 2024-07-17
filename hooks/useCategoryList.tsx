import axios from '@/utils/axios';
import React, { useEffect, useState } from 'react'

interface CategoryType {
    id: number
    name: string
}

const useCategoryList = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchCategoryList = async () => {
            try {
                const { data, status } = await axios.get("/categories");
                
                if (status != 200) throw new Error("Failed to fetch category list");

                setCategories(data.content);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            };
        }
        fetchCategoryList();
    }, []);

    return { categories, loading, error }
}

export default useCategoryList