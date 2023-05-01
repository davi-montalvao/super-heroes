import api from "@/services/api";
import { useState, useEffect } from "react";

type Category = {
  Id: number;
  Name: string;
}

type Hero = {
  Id: number;
  Name: string;
  Active: boolean;
  Category: Category;
}

export function useHeroes() {
  const [heroes, setHeroes] = useState<Hero[]>([])

  async function fetchHeroes() {
    const result = await api.get("/Heroes");
    const { data } = result;

    setHeroes(data.Items)
  }

  useEffect(() => {
    fetchHeroes()
  }, [])

  return heroes
};


