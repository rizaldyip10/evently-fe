"use client";

import { SearchQueryType } from "@/constants/type/search-query-type";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

const useSearchFilters = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [filters, setFilters] = useState<SearchQueryType>({
        event: null,
        date: null,
        category: null,
        city: null,
        page: 0,
        size: 6
    });

    useEffect(() => {
        const query = new URLSearchParams(searchParams.toString());
        const event = query.get("event");
        const date = query.get("date");
        const category = query.get("category");
        const city = query.get("city");

        setFilters((prevFilters) => ({
            ...prevFilters,
            event: event || null,
            date: date || null,
            category: category || null,
            city: city || null,
        }));
    }, [searchParams]);

    const handleFilterChange = useCallback((newFilter: Partial<SearchQueryType>) => {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters, ...newFilter };
        const params = new URLSearchParams();
  
        Object.entries(updatedFilters).forEach(([key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            params.set(key, value.toString());
          }
        });
  
        router.push(`?${params.toString()}`);
        return updatedFilters;
      });
    }, [router]);

    return { filters, handleFilterChange };
};  

export default useSearchFilters;