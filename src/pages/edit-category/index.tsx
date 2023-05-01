import * as Yup from 'yup'
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup'

import api from "@/services/api";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Container, Form, Content, Span, Footer } from "./styles";

type FormData = {
  Name: string;
}

export default function EditCategory() {
  const router = useRouter();
  const { categoryId, categoryName } = router.query

  const validationSchema = Yup.object({
    Name: Yup.string().required("O nome da categoria é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  })

  async function handleEditCategory(data: FormData) {
  
    try {
      await api.put(`/Category/${categoryId}`, {Name: data.Name});
      toast.success("Categoria editada com sucesso!");

    } catch (error) {
      toast.error("Erro ao editar categoria!");
      console.error(error);
    }
    router.back()
  }

  return (
    <Container>
      <Content>
        <h2>Editar Categoria</h2>
        <Form onSubmit={handleSubmit(handleEditCategory)}>
          <div>
            <Input
              type="text"
              label="Nome da Categoria"
              defaultValue={categoryName}
              {...register("Name")}
              error={errors.Name}
            />
            <Footer>
              <Button type="submit" active={true} variant="secondary">
                Editar
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


