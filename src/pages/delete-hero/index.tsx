import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import api from "@/services/api";
import { Button } from "@/components/Button";

import { Container, Content, Footer, Form } from "./styles";

export default function DeleteHero() {
  const router = useRouter();
  const { heroId, heroName } = router.query

  const { handleSubmit } = useForm();

  async function handleDeleteHero() {

    try {
      await api.delete(`/Heroes/${heroId}`);
      toast.success("Super-herói deletado com sucesso!");

    } catch (error) {
      toast.error("Erro ao deletar super-herói!");
      console.error(error);
    }
    router.back()
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(handleDeleteHero)}>
          <h2>Deletar super-herói</h2>
          <div>
            <span>
              Tem certeza que irá deletar o super-herói <strong>{heroName}</strong>?
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
