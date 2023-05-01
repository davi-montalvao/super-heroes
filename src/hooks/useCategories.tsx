import api from "@/services/api";
import { useState, useEffect } from "react";

type Category = {
  Id: number;
  Name: string;
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  async function fetchCategories() {
    const result = await api.get("/Category");
    const { data } = result;

    setCategories(data.Items)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return categories
};


