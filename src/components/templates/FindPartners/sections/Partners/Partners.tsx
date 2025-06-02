import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { IPartners } from "../../FindPartners.types";

import {
  StyledPartnersCardItem,
  StyledPartnersCardItemCountry,
  StyledPartnersCardItemDesc,
  StyledPartnersCardItemHead,
  StyledPartnersCardItemImg,
  StyledPartnersCardItemLeft,
  StyledPartnersCardItemLink,
  StyledPartnersCardItemName,
  StyledPartnersCardItemRight,
  StyledPartnersCardList,
  StyledPartnersCountryInner,
  StyledPartnersCountryOption,
  StyledPartnersCountryOptions,
  StyledPartnersCountrySelect,
  StyledPartnersCountryText,
  StyledPartnersCountryWrapper,
  StyledPartnersKeyItem,
  StyledPartnersKeyList
} from "./Partners.styled";

const Partners = () => {
  const { t } = useTranslation("find-partners");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [uniqueKeys, setUniqueKeys] = useState<string[]>([]);
  const [uniqueCountrys, setUniqueCountrys] = useState<string[]>([]);
  const [selectOpen, setSelectOpen] = useState<boolean>(false);
  const [selectCountry, setSelectCountry] = useState<string>("");
  const [itemOpen, setItemOpen] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [allItems, setAllItems] = useState<IPartners[]>([]);
  const [items, setItems] = useState<IPartners[]>([]);

  useEffect(() => {
    const fetchAllPartners = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/find-partners")
        const { data } = await res.json();
        setAllItems(data)
        setItems(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAllPartners();
  }, []);

  useEffect(() => {
    const fetchFilteredPartners = async () => {
      const params = new URLSearchParams();
      if (selectCountry) {
        params.append("country", selectCountry);
      }

      try {
        setLoading(true);
        const res = await fetch(`/api/find-partners?${params.toString()}`)
        const { data } = await res.json();
        setItems(data);
      } catch(error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    if (selectCountry) {
      fetchFilteredPartners();
    }
  }, [selectCountry]);


  useEffect(() => {
    const uniqueKey = new Set(allItems.map((item) => item.name[0].toUpperCase()).sort((a, b) => a.localeCompare(b)));
    setUniqueKeys([ t("PartnersAll"), ...uniqueKey]);
    const uniqueCountry = new Set(allItems.map((item) => item.country).sort((a, b) => a.localeCompare(b)));
    setUniqueCountrys([...uniqueCountry]);
  }, [allItems, t]);

  const handleClickOption = (country: string) => {
    setSelectOpen(false);
    setSelectCountry(country);
  }

  const handleToggleCard = (id: number) => {
    if (itemOpen.includes(id)) {
      setItemOpen(itemOpen.filter((item) => item !== id));
    } else {
      setItemOpen([...itemOpen, id]);
    }
  };

  if (loading) {
    return <Heading label="Loading..." textAlign="center" />;
  }

  return (
    <Section desktopSpacing={["80px", "112px"]}>
      <Container maxWidth="1008px">
        <StyledPartnersKeyList>
          {uniqueKeys.map((name, index) => (
            <StyledPartnersKeyItem key={name}>
              <Button
                label={name}
                onClick={() => setActiveTab(index)}
                variant={activeTab === index ? "secondary" : "tertiary"}
              />
            </StyledPartnersKeyItem>
          ))}
        </StyledPartnersKeyList>
        <StyledPartnersCountryWrapper>
          <StyledPartnersCountrySelect $isSelectOpen={selectOpen} onClick={() => setSelectOpen(!selectOpen)}>
            <StyledPartnersCountryInner $isSelectOpen={selectOpen}>
              <StyledPartnersCountryText $isSelectCountry={selectCountry} $isSelectOpen={selectOpen} label={t("PartnersSelectCountry")} size={2} />
              <StyledPartnersCountryText $isSelectCountry={selectCountry} $isSelectOpen={selectOpen} label={selectCountry} size={2} />
            </StyledPartnersCountryInner>
          </StyledPartnersCountrySelect>
          <StyledPartnersCountryOptions $isSelectOpen={selectOpen}>
            {uniqueCountrys.map((country) => (
              <StyledPartnersCountryOption key={country} onClick={() => handleClickOption(country)}>
                <Text label={country} as={"span"} size={2} color={selectCountry === country ? "#FF6F3D" : undefined} />
              </StyledPartnersCountryOption>
            ))}
          </StyledPartnersCountryOptions>
        </StyledPartnersCountryWrapper>
        <StyledPartnersCardList>
          {items && items.map((item) => (
            <StyledPartnersCardItem key={item.id} $isItemOpen={itemOpen.includes(item.id)} onClick={() => handleToggleCard(item.id)}>
              <StyledPartnersCardItemLeft>
                <StyledPartnersCardItemImg $imgUrl={""} />
              </StyledPartnersCardItemLeft>
              <StyledPartnersCardItemRight>
                <StyledPartnersCardItemHead>
                  <StyledPartnersCardItemName level={4} size={5} label={item.name ?? ""} />
                  <StyledPartnersCardItemCountry size={3} label={item.country ?? ""} />
                  {item.link &&
                    <StyledPartnersCardItemLink href={item.link.endsWith("/") ? item.link.slice(0, -1) : item.link} />
                  }
                </StyledPartnersCardItemHead>
                {item.description &&
                  <StyledPartnersCardItemDesc label={item.description} />
                }
              </StyledPartnersCardItemRight>
            </StyledPartnersCardItem>
          ))}
        </StyledPartnersCardList>
      </Container>
    </Section>
  );
};

export { Partners };