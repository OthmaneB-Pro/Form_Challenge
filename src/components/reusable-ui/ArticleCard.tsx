import styled from 'styled-components';

interface ArticleCardType {
  id : string;
  title: string;
  alt : string;
  src: string;
  description: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function ArticleCard({
  id,
  title,
  alt,
  src,
  description,
  onDelete,
  onEdit,
}: ArticleCardType) {
  return (
    <StyledArticleCard>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleImage src={src} alt={alt} />
      <ArticleDescription>{description}</ArticleDescription>
      <DeleteButton onClick={() => onDelete(id)}>Supprimer</DeleteButton>
      <EditButton onClick={() => onEdit(id)}>Modifier</EditButton>
    </StyledArticleCard>
  );
}

const StyledArticleCard = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 20px;
`;

const ArticleTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`;

const ArticleDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
