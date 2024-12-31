import { useTranslation } from "react-i18next";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;
const Profile = () => {
  const { t } = useTranslation();
  return (
    <ProfileContainer>
      <h1>{t("common.coming_soon")}</h1>
    </ProfileContainer>
  );
};
export default Profile;
