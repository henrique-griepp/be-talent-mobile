import { useTheme } from "styled-components/native";
import ChevronComponent from "../../../assets/svg/chevron";
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
} from "./styles";
import { FlatList } from "react-native";

export function Table() {
  const { TYPOGRAPHY } = useTheme();

  const DATA = [
    {
      id: 1,
      name: "João",
      job: "Back-end",
      admission_date: "2019-12-02T00:00:00.000Z",
      phone: "5551234567890",
      image:
        "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    },
    {
      id: 2,
      name: "Roberto",
      job: "Front-end",
      admission_date: "2020-03-12T00:00:00.000Z",
      phone: "5550321654789",
      image:
        "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
    },
    {
      id: 3,
      name: "Maria",
      job: "Front-end",
      admission_date: "2020-03-15T00:00:00.000Z",
      phone: "5557894561230",
      image:
        "https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png",
    },
    {
      id: 4,
      name: "Cleber",
      job: "Back-end",
      admission_date: "2020-06-01T00:00:00.000Z",
      phone: "5557410258963",
      image:
        "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    },
    {
      id: 5,
      name: "Giovana",
      job: "Designer",
      admission_date: "2020-06-20T00:00:00.000Z",
      phone: "5553698520147",
      image:
        "https://www.clipartmax.com/png/middle/277-2772117_user-profile-avatar-woman-icon-avatar-png-profile-icon.png",
    },
    {
      id: 6,
      name: "Mario",
      job: "Front-end",
      admission_date: "2020-10-01T00:00:00.000Z",
      phone: "5551234567890",
      image:
        "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
    },
    {
      id: 7,
      name: "Gabriel",
      job: "Back-end",
      admission_date: "2021-01-01T00:00:00.000Z",
      phone: "5551234567890",
      image:
        "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
    },
  ];

  function formatDate(rawDate: string) {
    const date = new Date(rawDate);
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formatter.format(date);
  }

  return (
    <TableContainer>
      <TableHeaderContainer>
        <TableHeaderText>Foto</TableHeaderText>
        <TableHeaderText style={{ flexGrow: 1, textAlign: "left" }}>
          Nome
        </TableHeaderText>
        <TableViewIcon>
          <CircleComponent />
        </TableViewIcon>
      </TableHeaderContainer>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TableListContainer>
            <TableListNames>
              <AvatarComponent flexGrow={0.02} size={34} source={item.image} />
              <TableListText
                paddingLeft="24px"
                style={{ flexGrow: 1, textAlign: "left" }}
              >
                {item.name}
              </TableListText>
              <TableViewIcon>
                <ChevronComponent />
              </TableViewIcon>
            </TableListNames>
            <TableListDataContainer>
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
                fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
                fontSize={TYPOGRAPHY.H2.FONT_SIZE}
              >
                Data de admissão
              </TableListDataText>
              <TableListDataText textAlign="right">
                {formatDate(item.admission_date)}
              </TableListDataText>
              <TableListDataText
                fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
                fontSize={TYPOGRAPHY.H2.FONT_SIZE}
              >
                Telefone
              </TableListDataText>
              <TableListDataText textAlign="right">
                {item.phone}
              </TableListDataText>
            </TableListDataContainer>
          </TableListContainer>
        )}
        keyExtractor={(item) => item.name}
      />
      {/* <TableListContainer>
        <TableListNames>
          <AvatarComponent flexGrow={0.02} size={34} />
          <TableListText
            paddingLeft="24px"
            style={{ flexGrow: 1, textAlign: "left" }}
          >
            Nome do funcionário
          </TableListText>
          <TableViewIcon>
            <ChevronComponent />
          </TableViewIcon>
        </TableListNames>
        <TableListDataContainer>
          <TableListDataText
            fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
            fontSize={TYPOGRAPHY.H2.FONT_SIZE}
          >
            Cargo
          </TableListDataText>
          <TableListDataText textAlign="right">Cargo</TableListDataText>
          <TableListDataText
            fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
            fontSize={TYPOGRAPHY.H2.FONT_SIZE}
          >
            Data de admissão
          </TableListDataText>
          <TableListDataText textAlign="right">texto4</TableListDataText>
          <TableListDataText
            fontWeight={TYPOGRAPHY.H2.FONT_WEIGHT}
            fontSize={TYPOGRAPHY.H2.FONT_SIZE}
          >
            Telefone
          </TableListDataText>
          <TableListDataText textAlign="right">texto4</TableListDataText>
        </TableListDataContainer>
      </TableListContainer> */}
      {/* //TODO: remover  */}
    </TableContainer>
  );
}
