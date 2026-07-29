import { FC } from "react";
import Container from "@mui/material/Container";
import { Header } from "../../components/header/header";
import { SearchBar } from "../../components/search-bar/search-bar";
import { NoteList } from "../../components/notes/note-list/note-list";

export const Main: FC = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <SearchBar />
      <NoteList />
    </Container>
  );
};
