import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { TeamSearchComponent } from "../../components/TeamSearch";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <TeamSearchComponent />
        <Table />
      </HomeContainer>
    </>
  );
}
