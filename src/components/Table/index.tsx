import { useTheme } from "styled-components/native";
import CircleComponent from "../../../assets/svg/circle";
import { AvatarComponent } from "../Avatar";
import {
  TableContainer,
  TableHeaderContainer,
  TableHeaderText,
  TableListDataContainer,
  TableListDataText,
  TableListContainer,
  TableListText,
  TableViewIcon,
  TableListNames,
  TableViewBorder,
  TableColumnImage,
} from "./styles";
import { useEffect, useState } from "react";
import { TeamSearchComponent } from "../TeamSearch";
import { StyledChevron } from "../StyledChevron";
import { Employees, fetchData } from "../../utils/fetchData";
import { FlatList } from "react-native";

export function Table() {
  const { TYPOGRAPHY } = useTheme();
  const [isOpenItems, setIsOpenItems] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState<Employees[]>([]);
  const [error, setError] = useState<string | null>(null);

  const url = "http://seu_ip:3000/employees"; //Substitua pelo seu endereço IP da sua maquina(Nota: Caso necessário, altere a porta conforme fornecido no json-server)

  useEffect(() => {
    async function getEmployees() {
      try {
        const data = await fetchData(url);
        setEmployees(data);
      } catch (err) {
        console.error("Erro ao buscar os dados:", err);
        setError("Não foi possível achar os dados.");
      }
    }

    getEmployees();
  }, []);

  function handleAccordion(id: number) {
    setIsOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  function formatDate(rawDate: string) {
    const date = new Date(rawDate);
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatter.format(date);
  }

  function formatPhone(phone: string) {
    const ddi = phone.slice(0, 2);
    const ddd = phone.slice(2, 4);
    const firstPart = phone.slice(4, 9);
    const secondPart = phone.slice(9);

    return `+${ddi} (${ddd}) ${firstPart}-${secondPart}`;
  }

  function OnSearchInputChanged(searchText: string) {
    setSearch(searchText);
  }

  function normalizeString(str: string) {
    return str
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
  }

  const filteredData = employees.filter((item) => {
    const normalizedSearch = normalizeString(search);
    const matchesJob = normalizeString(item.job)?.includes(normalizedSearch);
    const matchesName = normalizeString(item.name)?.includes(normalizedSearch);
    const matchesPhone = normalizeString(item.phone.toString())?.includes(
      normalizedSearch,
    );
    if (matchesJob) {
      return item;
    } else if (matchesName) {
      return item;
    } else if (matchesPhone) {
      return item;
    }
  });

  return (
    <>
      <TeamSearchComponent onChangedInput={OnSearchInputChanged} />
      <TableContainer>
        <TableViewBorder>
          <TableHeaderContainer>
            <TableColumnImage>
              <TableHeaderText>Foto</TableHeaderText>
            </TableColumnImage>
            <TableHeaderText style={{ flexGrow: 1, textAlign: "left" }}>
              Nome
            </TableHeaderText>
            <TableViewIcon>
              <CircleComponent />
            </TableViewIcon>
          </TableHeaderContainer>
          {error && (
            <TableListText style={{ width: "100%", textAlign: "center" }}>
              {error}
            </TableListText>
          )}
          <FlatList
            data={filteredData}
            renderItem={({ item, index }) => (
              <TableListContainer
                style={{ borderTopWidth: index === 0 ? 0 : 1 }}
              >
                <TableListNames onPress={() => handleAccordion(item.id)}>
                  <TableColumnImage>
                    <AvatarComponent size={34} source={item.image} />
                  </TableColumnImage>
                  <TableListText style={{ flexGrow: 1, textAlign: "left" }}>
                    {item.name}
                  </TableListText>
                  <TableViewIcon>
                    <StyledChevron isRotating={isOpenItems[item.id]} />
                  </TableViewIcon>
                </TableListNames>
                <TableListDataContainer display={isOpenItems[item.id]}>
                  <TableListDataText
                    fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
                    fontSize={TYPOGRAPHY.H2.FONT_SIZE}
                  >
                    Cargo
                  </TableListDataText>
                  <TableListDataText textAlign="right">
                    {item.job}
                  </TableListDataText>
                  <TableListDataText
                    width="60%"
                    fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
                    fontSize={TYPOGRAPHY.H2.FONT_SIZE}
                  >
                    Data de admissão
                  </TableListDataText>
                  <TableListDataText width="40%" textAlign="right">
                    {formatDate(item.admission_date)}
                  </TableListDataText>
                  <TableListDataText
                    width="30%"
                    fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
                    fontSize={TYPOGRAPHY.H2.FONT_SIZE}
                  >
                    Telefone
                  </TableListDataText>
                  <TableListDataText width="70%" textAlign="right">
                    {formatPhone(item.phone)}
                  </TableListDataText>
                </TableListDataContainer>
              </TableListContainer>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </TableViewBorder>
      </TableContainer>
    </>
  );
}
