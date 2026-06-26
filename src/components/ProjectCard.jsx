import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.div`
  display: block;
  padding: 20px;
  background: #1e293b;
  border-radius: 12px;
  color: white;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const ProjectName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const ProjectDescription = styled.p`
  margin-top: 8px;
  font-size: 0.875rem;
  color: #cbd5e1;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const ProjectVideo = styled.iframe`
  width: 100%;
  height: 10rem;
  border-radius: 8px;
  margin-bottom: 12px;
  border: none;
  background: #000;
`;

const ProjectCard = ({ name, description, uri, image, videoUrl }) => {
  const navigate = useNavigate();

  const onCardTitleClick = (uri) => {
    navigate(`/projects/${uri}`);
  };

  return (
    <CardContainer>
      {videoUrl ? (
        <ProjectVideo
          src={videoUrl}
          title={name}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : image ? (
        <ProjectImage src={image} alt={name} />
      ) : null}
      <ProjectName onClick={() => onCardTitleClick(uri)}>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
    </CardContainer>
  );
};

export default ProjectCard;
