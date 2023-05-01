import { useRouter } from "next/router";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Actions, Content } from "./styles";

type Category = {
  Id: number;
  Name: string;
};

type Hero = {
  Category: Category;
  Id: number;
  Name: string;
  Active: boolean;
};

type CardProps = {
  data: Hero[];
};

export function CardHero({ data }: CardProps) {
  const router = useRouter();
  return (
    <>
      {data.map((item) => (
        <Content key={item.Id}>
        <>
          <strong>Nome:</strong>
          <span>{item.Name}</span>
          <br />
          <strong>Ativo:</strong>
          <span>{item.Active ? "Ativado" : "Desativado"}</span>
          <br />
        </>
        <strong>Categoria:</strong>
        <span>{item.Category.Name}</span>
        <br />
        <Actions>
          <FiEdit
            size={16}
            onClick={() => router.push(`/edit-hero?heroesId=${item.Id}`)}
          />
          <FiTrash2
            size={16}
            onClick={() => router.push(`/delete-hero?heroId=${item.Id}&heroName=${item.Name}`)}
          />
        </Actions>
       </Content>
      ))}
    </>
  );
};
