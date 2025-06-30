import { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledCategoryFilterBtn,
  StyledCategoryFilterLabel,
  StyledCategoryFilterText,
  StyledCategoryFilterDropdown,
  StyledCategoryFilterDropdownHeader,
  StyledCategoryFilterDropdownHeaderBtn,
  StyledCategoryFilterDropdownContent,
  StyledCategoryFilterDropdownBtn,
} from "./CategoryFilter.styled";
import { Text } from "@src/components/ui/Text";
import { ChevronRightIcon } from "@src/components/icons";
import { categories } from "./data/categories";

const CategoryFilter = ({
  handleCategoryFilter,
}: {
  handleCategoryFilter: (categoryId: string) => void;
}) => {
  const { t } = useTranslation("all-connectors");
  const buttonRef = useRef(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("AllConnectors");
  const [openCategoryId, setOpenCategoryId] = useState<string | null>("all");
  const [openCategoryName, setOpenCategoryName] = useState("AllConnectors");

  const isHoverable =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

  const toggleCategory = (categoryId: string | null) => {
    setOpenCategoryId((prev) => (prev === categoryId ? "all" : categoryId));
  };

  const onCloseDropdown = () => {
    setIsOpen(false);
    setOpenCategoryId("all");
  };

  const handleSelectCategory = (categoryId: string, categoryName: string) => {
    setOpenCategoryName(categoryName);
    setOpenCategoryId(categoryId);
    setIsOpen(false);
    handleCategoryFilter(categoryId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      const focusableItems = listRef.current?.querySelectorAll(
        ".category-filter-dropdown-btn, .category-filter-subdropdown-btn",
      );
      const firstElement = focusableItems?.[0] as HTMLElement;
      const lastElement = focusableItems?.[
        focusableItems.length - 1
      ] as HTMLElement;

      if (document.activeElement === lastElement && !e.shiftKey) {
        onCloseDropdown();
      } else if (document.activeElement === firstElement && e.shiftKey) {
        onCloseDropdown();
      }
    }
  };

  return (
    <div onMouseLeave={() => onCloseDropdown()}>
      <StyledCategoryFilterBtn
        ref={buttonRef}
        onMouseEnter={() => (isHoverable ? setIsOpen(true) : null)}
        onClick={() => setIsOpen(!isOpen)}
        $isOpen={isOpen}
      >
        <StyledCategoryFilterLabel>{t("Filter")}</StyledCategoryFilterLabel>
        <StyledCategoryFilterText>
          {t(openCategoryName)}
        </StyledCategoryFilterText>
      </StyledCategoryFilterBtn>

      {isOpen && (
        <StyledCategoryFilterDropdown onKeyDown={handleKeyDown}>
          <StyledCategoryFilterDropdownHeader
            $border={
              openCategoryId === "by-products" ||
              openCategoryId === "by-developers"
            }
          >
            {(openCategoryId === "by-products" ||
              openCategoryId === "by-developers") && (
              <StyledCategoryFilterDropdownHeaderBtn
                onClick={() => toggleCategory(openCategoryId)}
                $isBack
              />
            )}
            <Text
              as="span"
              fontSize="13px"
              lineHeight="24px"
              fontWeight={600}
              letterSpacing="0.04em"
              color={
                openCategoryId === "by-products" ||
                openCategoryId === "by-developers"
                  ? "#ff6f3d"
                  : "#444444"
              }
              textTransform="uppercase"
              label={
                openCategoryId === "by-products"
                  ? t("ByProducts")
                  : openCategoryId === "by-developers"
                    ? t("ByDevelopers")
                    : t("CategoryFilter")
              }
            />
            <StyledCategoryFilterDropdownHeaderBtn
              onClick={onCloseDropdown}
              $isCross
            />
          </StyledCategoryFilterDropdownHeader>

          <StyledCategoryFilterDropdownContent ref={listRef} $isMain>
            {categories.map((item) => (
              <li
                onMouseEnter={() =>
                  isHoverable ? toggleCategory(item.id) : null
                }
                key={item.label}
              >
                <StyledCategoryFilterDropdownBtn
                  onClick={() => {
                    if (!item.items) {
                      handleSelectCategory(item.id, item.label);
                      setCategoryName(item.label);
                    }
                    toggleCategory(item.id);
                  }}
                  $isActive={categoryName === item.label}
                  className="category-filter-dropdown-btn"
                >
                  <span>{t(item.label)}</span>
                  {item.items && item.items.length > 0 && <ChevronRightIcon />}
                </StyledCategoryFilterDropdownBtn>

                {item.items && openCategoryId === item.id && (
                  <StyledCategoryFilterDropdownContent>
                    {item.items.map((item) => (
                      <li key={item.label}>
                        <StyledCategoryFilterDropdownBtn
                          onClick={() => {
                            handleSelectCategory(item.id, item.label);
                            setCategoryName(item.label);
                          }}
                          $isActive={categoryName === item.label}
                          className="category-filter-subdropdown-btn"
                        >
                          {t(item.label)}
                        </StyledCategoryFilterDropdownBtn>
                      </li>
                    ))}
                  </StyledCategoryFilterDropdownContent>
                )}
              </li>
            ))}
          </StyledCategoryFilterDropdownContent>
        </StyledCategoryFilterDropdown>
      )}
    </div>
  );
};

export { CategoryFilter };
