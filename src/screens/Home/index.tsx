import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <HomeContainer>
        <Header />
        <Table />
      </HomeContainer>
    </>
  );
}
