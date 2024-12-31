import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { theme } from "../../constant/colors";

const HeaderContainer = styled.header`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.text};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: ${theme.link};
  a {
    color: ${theme.link};
  }
`;

const LanguageSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 1rem;
`;

const Header = ({ img }) => {
  const { t, i18n } = useTranslation();

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "hi", label: "हिन्दी" },
    { value: "fr", label: "Français" },
  ];

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={img} className="App-logo" alt="logo" />
        <span>{t("common.welcome")}</span>
      </LogoContainer>
      <LinksContainer>
        <a href="/home">{t("common.welcome")}</a>
        <a href="/profile">{t("common.profile")}</a>
      </LinksContainer>
      <LanguageSelectorContainer>
        <div>
          <Label htmlFor="language-select">{t("common.language")}: </Label>
          <Select
            id="language-select"
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      </LanguageSelectorContainer>
    </HeaderContainer>
  );
};

export default Header;
