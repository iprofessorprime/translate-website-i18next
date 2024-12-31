import styled from "styled-components";
import { useTranslation } from "react-i18next";

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
`;

const Home = () => {
  const { t } = useTranslation();
  return (
    <HomeContainer>
      <div>
        <Title>{t("homepage.title")}</Title>
        <Description>{t("homepage.description")}</Description>
        <span>{t("common.loading")}</span>
      </div>
      <Button onClick={() => console.log('logout successfully')}>
        {t("common.logout")}
      </Button>
    </HomeContainer>
  );
};

export default Home;
