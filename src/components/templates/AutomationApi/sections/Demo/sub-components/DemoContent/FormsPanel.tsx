import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { Select } from "@src/components/ui/Select";

const StyledFormsPanel = styled.div`
  h3 {
    padding: 56px 0 16px;
    text-align: center;
    color: #333333;
  }

  h4 {
    text-align: center;
    padding-bottom: 32px;
    font-weight: 400;
    color: #333333;
    font-size: 16px;
  }

  .docbuilder-script {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px 32px;
    padding: 24px;
    background: rgba(239, 239, 239, 0.6);
  }

  .styled-select-container {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  }

  .input-wrapper {
    position: relative;
    border: solid 1px #aaaaaa;
    background: #ffffff;
    box-sizing: border-box;
    max-width: 336px;
    width: 100%;
    line-height: 14px;
    height: 56px;
    display: inline-block;
    border-radius: 9px;

    input {
      height: auto;
      background: transparent;
      margin-top: 24px;
      margin-left: 16px;
      outline: none;
      border: none;
      width: calc(100% - 32px);
      padding: 0;
      font-size: 16px;
    }

    label {
      color: #aaaaaa;
      position: absolute;
      z-index: 2;
      left: 16px;
      top: 18px;
      pointer-events: none;
      transition: transform 100ms ease;
      transform: translateY(0);
      font-size: 16px;
      line-height: 16px;
    }

    &:last-child {
      grid-column-start: 1;
      grid-row-start: 5;
    }
  }

  .input-wrapper input[type="text"],
  .input-wrapper input[type="email"],
  .input-wrapper input[type="tel"] {
    width: 100%;
    padding: 14px 12px 4px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
  }

  .input-wrapper label {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    font-size: 16px;
    color: #aaa;
    pointer-events: none;
    transition: 0.2s ease all;
  }

  .input-wrapper input:focus + label,
  .input-wrapper input.filled + label {
    top: 12px;
    font-size: 12px;
    color: #666;
  }

  .input-wrapper:nth-child(4) input:focus + label,
  .input-wrapper:nth-child(4) input.filled + label {
    top: 0px;
    font-size: 16px;
    color: #333;
  }

  .radio-wrapper {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    grid-column-start: 2;
    grid-row-start: 5;

    .radio-group-wrapper {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .radio-group-label {
      font-size: 16px;
    }

    .radio-option input[type="radio"] {
      min-width: 24px;
      height: 24px;
      margin: 0px;
    }

    .radio-option input[type="radio"]:checked + label:before {
      content: "";
      position: absolute;
      left: -42px;
      top: -5px;
      min-width: 24px;
      height: 24px;
      border-radius: 100%;
      background: #ffffff;
      border: 1px solid #666666;
      transition: all 0.2s ease;
    }

    .radio-option input[type="radio"]:checked + label:after {
      content: "";
      width: 8px;
      height: 8px;
      background: #333333;
      position: absolute;
      top: 4px;
      left: -33px;
      border-radius: 100%;
      transition: all 0.2s ease;
    }

    label {
      position: relative;
      color: #666666;
      top: 0px;
      left: 17px;
      width: 100%;
      transform: translateY(0%);
    }
  }

  .radio-option {
    display: flex;
    align-items: center;
  }

  @media ${device.tablet} {
    .docbuilder-script {
      grid-template-columns: 1fr 1fr;
      gap: 16px 24px;
    }
  }
`;

interface IRadioOption {
  InternalId: string;
  Tag: string;
  checked: boolean;
}

interface IBaseContentControl {
  Tag: string;
  InternalId: string;
  GroupKey?: string;
  Type: "input" | "radio";
  Value?: string | boolean | IRadioOption[];
}

interface IInputContentControl extends IBaseContentControl {
  Type: "input";
  Value: string;
}

interface IRadioContentControl extends IBaseContentControl {
  Type: "radio";
  Value: IRadioOption[];
}

type IContentControl = IInputContentControl | IRadioContentControl;

interface IPerson {
  FirstName: string;
  LastName: string;
  PostalCode: string;
  Sex?: "Male" | "Female";
  [key: string]: string | undefined;
}

interface IContentControlChangeEvent {
  InternalId: string;
  Tag?: string;
}

interface IFormControl {
  InternalId: string;
  Tag?: string;
}

interface IFormsPanel {
  connector: {
    executeMethod: <T = unknown>(
      method: string,
      args: unknown[] | null,
      callback?: (data: T) => void,
    ) => void;
    attachEvent: (event: string, handler: (...args: unknown[]) => void) => void;
  };
}

export const FormsPanel = ({ connector }: IFormsPanel) => {
  const { t } = useTranslation("automation-api");
  const [contentControls, setContentControls] = useState<IContentControl[]>([]);
  const [persons, setPersons] = useState<IPerson[]>([]);
  const [selectedValue, setSelectedValue] = useState("");

  const isFilled = (val: string) => !!val?.toString().trim();

  useEffect(() => {
    if (!connector) return;

    connector.executeMethod("GetAllContentControls", null, (data) => {
      if (!Array.isArray(data)) return;

      const enrichedControls = data
        .filter((c) => c.Tag)
        .map((control) => {
          if (["Male", "Female"].includes(control.Tag)) {
            return {
              ...control,
              GroupKey: "Sex",
              Type: "radio",
              Value: false,
            };
          }
          return {
            ...control,
            Type: "input",
            Value: "",
          };
        });

      const uniqueControls: IContentControl[] = [];
      const seenGroups = new Set();

      for (const ctrl of enrichedControls) {
        if (ctrl.Type === "radio" && ctrl.GroupKey) {
          if (seenGroups.has(ctrl.GroupKey)) continue;
          const grouped = enrichedControls
            .filter((c) => c.GroupKey === ctrl.GroupKey)
            .map((c) => ({
              Tag: c.Tag,
              InternalId: c.InternalId,
              checked: false,
            }));
          uniqueControls.push({
            ...ctrl,
            Tag: ctrl.GroupKey,
            Value: grouped,
          });
          seenGroups.add(ctrl.GroupKey);
        } else {
          uniqueControls.push(ctrl);
        }
      }

      setContentControls(uniqueControls);
    });

    connector.attachEvent("onChangeContentControl", (...args: unknown[]) => {
      const ctrl = args[0] as IContentControlChangeEvent;
      connector.executeMethod(
        "GetFormValue",
        [ctrl.InternalId],
        (value: string) => {
          setContentControls((prev) =>
            prev.map((c) => {
              if (c.Type === "radio") return c;
              if (c.InternalId === ctrl.InternalId) {
                return { ...c, Value: value };
              }
              return c;
            }),
          );
        },
      );
    });
  }, [connector]);

  useEffect(() => {
    fetch("/js/persons.json")
      .then((res) => res.json())
      .then(setPersons);
  }, []);

  const handlePersonSelect = (postalCode: string) => {
    setSelectedValue(postalCode);
    const person = persons.find((p) => p.PostalCode === postalCode);
    if (!person) return;

    Object.entries(person).forEach(([tag, value]) => {
      if (tag === "Sex") {
        const selectedSex = value === "Male" ? "Male" : "Female";
        const radioGroup = contentControls.find(
          (c) => c.Tag === "Sex" && c.Type === "radio",
        );

        if (radioGroup && Array.isArray(radioGroup.Value)) {
          const selectedOption = (radioGroup.Value as IRadioOption[]).find(
            (opt) => opt.Tag === selectedSex,
          );
          if (selectedOption) {
            connector.executeMethod("SetFormValue", [
              selectedOption.InternalId,
              "true",
            ]);
            setTimeout(() => {
              setContentControls((prev) =>
                prev.map((ctrl) => {
                  if (ctrl.Type === "radio" && ctrl.Tag === "Sex") {
                    return {
                      ...ctrl,
                      Value: ctrl.Value.map((r: IRadioOption) => ({
                        ...r,
                        checked: r.InternalId === selectedOption.InternalId,
                      })),
                    };
                  }
                  return ctrl;
                }),
              );
            }, 100);
          }
        }
        return;
      }

      connector.executeMethod<IFormControl[]>(
        "GetFormsByTag",
        [tag],
        (forms) => {
          if (forms.length > 0) {
            connector.executeMethod("SetFormValue", [
              forms[0].InternalId,
              value ?? "",
            ]);
          }
        },
      );
    });

    const userTags = new Set(Object.keys(person));
    setContentControls((prev) =>
      prev.map((ctrl) => {
        if (ctrl.Type === "input") {
          const newValue = person[ctrl.Tag] ?? "";
          const shouldClear = !userTags.has(ctrl.Tag) || newValue.trim() === "";

          if (shouldClear) {
            connector.executeMethod<IFormControl[]>(
              "GetFormsByTag",
              [ctrl.Tag],
              (forms) => {
                if (forms.length > 0) {
                  connector.executeMethod("SetFormValue", [
                    forms[0].InternalId,
                    "",
                  ]);
                }
              },
            );
            return { ...ctrl, Value: "" };
          }
        }
        return ctrl;
      }),
    );
  };

  const handleInputChange = (id: string, value: string) => {
    connector.executeMethod("SetFormValue", [id, value]);
  };

  const handleRadioChange = (groupTag: string, id: string) => {
    connector.executeMethod("SetFormValue", [id, "true"]);
    setContentControls((prev) =>
      prev.map((ctrl) => {
        if (
          ctrl.Type === "radio" &&
          ctrl.Tag === groupTag &&
          Array.isArray(ctrl.Value)
        ) {
          return {
            ...ctrl,
            Value: ctrl.Value.map((r: IRadioOption) => ({
              ...r,
              checked: r.InternalId === id,
            })),
          };
        }
        return ctrl;
      }),
    );
  };

  return (
    <StyledFormsPanel>
      <div className="examples_block ec-filling-out-forms">
        <Heading level={3} size={4} label={t("FillingOutForms")} />
        <Heading level={4} size={5} label={t("FillsInTheEmptyCells")} />

        <div className="styled-select-container">
          <Select
            selected={
              selectedValue
                ? [
                    {
                      value: selectedValue,
                      label:
                        persons.find((p) => p.PostalCode === selectedValue)
                          ?.FirstName +
                        " " +
                        persons.find((p) => p.PostalCode === selectedValue)
                          ?.LastName,
                    },
                  ]
                : []
            }
            setSelected={(newSelected) => {
              const selectedArray = Array.isArray(newSelected)
                ? newSelected
                : [];
              const postalCode = selectedArray[0]?.value || "";
              handlePersonSelect(postalCode);
            }}
            options={persons.map((p) => ({
              value: p.PostalCode,
              label: `${p.FirstName} ${p.LastName}`,
            }))}
            label={t("ChooseExample")}
          />
        </div>

        <div id="controlsBlock" className="docbuilder-script">
          {contentControls.map((ctrl) => (
            <div
              key={ctrl.InternalId || ctrl.Tag}
              className={`input-wrapper ${ctrl.Type === "radio" ? "radio-wrapper" : ""}`}
            >
              {ctrl.Type === "input" && (
                <>
                  <input
                    className={`content-control-input ${isFilled(ctrl.Value) ? "filled" : ""}`}
                    value={ctrl.Value}
                    onChange={(e) =>
                      handleInputChange(ctrl.InternalId, e.target.value)
                    }
                    required
                  />
                  <label>{ctrl.Tag.replace(/([a-z])([A-Z])/g, "$1 $2")}</label>
                </>
              )}

              {ctrl.Type === "radio" && Array.isArray(ctrl.Value) && (
                <div className="radio-group-wrapper">
                  <span className="radio-group-label">
                    {ctrl.Tag.replace(/([a-z])([A-Z])/g, "$1 $2")}
                  </span>
                  {ctrl.Type === "radio" &&
                    ctrl.Value.map((r) => (
                      <div key={r.InternalId} className="radio-option">
                        <input
                          type="radio"
                          id={r.InternalId}
                          name={ctrl.Tag}
                          checked={r.checked}
                          className="content-control-radio"
                          onChange={() =>
                            handleRadioChange(ctrl.Tag, r.InternalId)
                          }
                        />
                        <label htmlFor={r.InternalId} className="label-radio">
                          {r.Tag.replace(/([a-z])([A-Z])/g, "$1 $2")}
                        </label>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </StyledFormsPanel>
  );
};
