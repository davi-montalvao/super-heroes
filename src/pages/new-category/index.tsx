
import * as Yup from 'yup'
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";

import api from "@/services/api";
import { Input } from "../../components/Input";
import { Button } from "@/components/Button";

import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup'

import { Container, Content, Footer, Form } from "./styles";

type FormData = {
  Name: string;
}

export default function NewCategory() {
  const router = useRouter();
  
  const validationSchema = Yup.object({
    Name: Yup.string().required("O nome é obrigatório"),
  });

  const {
    register,
    handleSubmit,    
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  })



  async function handleRegisterEvent (data: FormData ) {
    
    try {
      await api.post('/Category/', { Name: data.Name });
      toast.success("categoria criada com sucesso!");
      
    } catch (error) {
      toast.error("Erro ao criar categoria!");
      
    }
    
    router.back();
    
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(handleRegisterEvent)}>
          <h2>Criar uma nova categoria</h2>
          <Input
            type="text"
            label="Nome da categoria"
            {...register("Name")}
            error={errors.Name}
          />
          <Footer>
            <Button
              type="submit"
              active={true}
              variant="secondary"
            >
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


