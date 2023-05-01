import * as Yup from 'yup'
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup'

import api from "@/services/api";
import { useCategories } from "@/hooks/useCategories";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";

import { Container, Content, Footer, Form } from "./styles";

type Category = {
  Id: number;
  Name: string;
}

type Active = {
  value: boolean;
}

type FormData = {
  Name: string;
  Active: Active;
  Category: Category;
}

export default function NewHero() {
  const router = useRouter();
  const categories = useCategories()

  const validationSchema = Yup.object({
    Name: Yup.string().required("O nome é obrigatório"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  })

  async function handleCreateHero(data: FormData) {

    let dataFormatted = {
      Name: data.Name,
      CategoryId: data.Category.Id,
      Active: true
    }

    try {
      await api.post("/Heroes/", dataFormatted);
      toast.success("Super-herói criado com sucesso!");

    } catch (error) {
      toast.error("Erro ao criar super-herói!");
    }

    router.back();

  };

  const categoryOptions = categories.map((category) => {
    return {
      label: category.Name,
      value: category.Name,
      Id: category.Id,
    };
  });

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(handleCreateHero)}>
          <h2>Criar um novo herói</h2>
          <Input
            type="text"
            label="Nome do super-herói"
            {...register("Name")}
            error={errors.Name}
          />

          <Select
            name="Category"
            control={control}
            values={categoryOptions}
            error={errors.Active?.message}
          />

          <Footer>
            <Button type="submit" active={true} variant="secondary">
              Criar
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
        </Form>
      </Content>
    </Container>
  );
}
