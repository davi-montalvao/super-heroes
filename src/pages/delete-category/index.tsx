import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import api from "@/services/api";
import { Button } from "@/components/Button";

import { Container, Content, Footer, Form } from "./styles";

export default function DeleteCategory() {
  const router = useRouter();
  const { categoryId, categoryName } = router.query

  const { handleSubmit } = useForm();

  async function handleDeleteHero() {

    try {
      await api.delete(`/Category/${categoryId}`);
      toast.success("Categoria deletada com sucesso!");

    } catch (error) {
      toast.error("Erro ao deletar categoria!");
      console.error(error);
    }
    router.back()
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(handleDeleteHero)}>
          <h2>Deletar categoria</h2>
          <div>
            <span>
              Tem certeza que irá deletar a categoria <strong>{categoryName}</strong>? Pode haver super-heróis atrelados a mesma.
            </span>
            <Footer>
              <Button
                type="submit"
                active={true}
                variant="secondary"
              >
                Deletar
              </Button>
              <Button
                type="button"
                active={false}
                variant="secondary"
                onClick={router.back}
              >
                Voltar
              </Button>
            </Footer>
          </div>
        </Form>
      </Content>
    </Container>
  );
}
