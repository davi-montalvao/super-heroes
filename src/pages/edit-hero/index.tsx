import * as Yup from 'yup'
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup'

import api from "@/services/api";
import { useCategories } from "@/hooks/useCategories";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Select } from "@/components/Select";

import { Container, Form, Content, Span, Footer } from "./styles";

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

type EditHeroProps = {
  Id: number;
  Name: string;
  Active: boolean;
  Category: Category;
}

export default function EditHero({ Id, Name, Active, Category }: EditHeroProps) {
  const router = useRouter();
  const categories = useCategories()

  const validationSchema = Yup.object({
    Name: Yup.string().required("O nome do super-herói é obrigatório"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  })

  async function handleEditHero(data: FormData) {

    let dataFormatted = {
      Name,
      CategoryId: Category.Id,
      Active
    }

    if (data.Name) {
      Object.assign(dataFormatted, { Name: data.Name })
    }

    if (data.Category?.Id) {
      Object.assign(dataFormatted, { CategoryId: data.Category?.Id })
    }

    if (data.Active?.value) {
      Object.assign(dataFormatted, { Active: data.Active.value })
    }

    try {
      await api.put(`/Heroes/${Id}`, dataFormatted);
      toast.success("Super-herói editado com sucesso!");

    } catch (error) {
      toast.error("Erro ao editar super-herói!");
      console.error(error);
    }

    router.back()

  }

  const activeOptions = [
    { label: "Sim", value: true },
    { label: "Não", value: false },
  ];

  const defaultActiveOption = activeOptions.find((activeOption) => activeOption.value === Active)

  const categoryOptions = categories.map((category) => {
    return {
      label: category.Name,
      value: category.Name,
      Id: category.Id,
    };
  });

  const defaultCategoryOption = categoryOptions.find((categoryOption) => categoryOption.Id === Category.Id)

  return (
    <Container>
      <Content>
        <h2>Editar super-herói</h2>
        <Form onSubmit={handleSubmit(handleEditHero)}>
          <div>
            <Input
              type="text"
              label="Nome do Herói"
              defaultValue={Name}
              {...register("Name")}
              error={errors.Name}
            />

            <Span>Nome da categoria</Span>
            {categoryOptions.length > 0 && (
              <Select
                name="Category"
                control={control}
                values={categoryOptions}
                defaultValue={defaultCategoryOption}
                error={errors.Active?.message}
              />
            )}

            <Span>Super-herói ativo?</Span>
            {activeOptions.length > 0 && (
              <Select
                name="Active"
                control={control}
                values={activeOptions}
                defaultValue={defaultActiveOption}
                error={errors.Active?.message}
              />
            )}

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { heroesId } = query;
  const { data } = await api.get(`/Heroes/${heroesId}`);

  return {
    props: {
      Id: data.Id,
      Name: data.Name,
      Active: data.Active,
      Category: {
        Id: data.Category.Id,
        Name: data.Category.Name,
      },
    },
  };
};
