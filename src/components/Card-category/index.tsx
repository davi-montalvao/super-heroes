import { useRouter } from "next/router";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Actions, Content } from "./styles";

type Category = {
  Id: number;
  Name: string;
};

type CardProps = {
  data: Category[];
};

export function CardCategory({ data }: CardProps) {
  const router = useRouter();

  return (
    <>
    {data.map((item) => (
      <Content key={item.Id}>
        <strong>Categoria:</strong>
        <span>{item.Name}</span>
        <br /> 
        <Actions>
          <FiEdit
            size={16}
            onClick={() => router.push(`/edit-category?categoryId=${item.Id}&categoryName=${item.Name}`)}
            />
          <FiTrash2
            size={16}
            onClick={() => router.push(`/delete-category?categoryId=${item.Id}&categoryName=${item.Name}`)}
            />
        </Actions>     
      </Content>
    ))}
    </>
  );
};
