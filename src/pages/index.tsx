import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "@/components/Button";


import { CardHero } from "@/components/Card-hero";
import { useHeroes } from "@/hooks/useHeroes";
import { useCategories } from "@/hooks/useCategories";

import { ButtonOption, Container, Content, Header, Wrapper, Footer } from "./styles";
import { CardCategory } from "@/components/Card-category";

export default function Home() {
  const router = useRouter();
  const heroes = useHeroes();
  const categories = useCategories();
  
  const [tabSelected, setTabSelected] = useState<"heroes" | "category">("heroes");

  return (
    <>
      <Header>
        <Wrapper>
          <ButtonOption>
            <Button
              active={tabSelected === "heroes"}
              variant="secondary"
              onClick={() => setTabSelected("heroes")}
            >
              Heróis
            </Button>
            <Button
              active={tabSelected === "category"}
              variant="secondary"
              onClick={() => setTabSelected("category")}
            >
              Categoria
            </Button>
          </ButtonOption>
        </Wrapper>
      </Header>

      <Container>
        <Content>
        {tabSelected === "heroes" &&  <CardHero data={heroes} />}
        {tabSelected === "category" && <CardCategory data={categories} />}
        </Content>
      </Container>

      <Footer>
        {tabSelected === "heroes" && (
          <Button
            active={false}
            variant="secondary"
            onClick={() => router.push("/new-hero")}
          >
            Criar herói
          </Button>
        )}
        {tabSelected === "category" && (
          <Button
            active={false}
            variant="secondary"
            onClick={() => router.push("/new-category")}
          >
            Criar Categoria
          </Button>
        )}
      </Footer>
    </>
  );
}
