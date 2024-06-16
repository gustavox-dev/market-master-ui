import { useCategoryData } from "../../hoocks/useCategoryData";
import Sidebar from "../Sidebar";
import { CategoryCard, CategoryContainer, CategoryDescription, CategoryName } from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export function Categories() {
  const { data } = useCategoryData();

  return (
    <>
      <h1>Categorias</h1>
      <CategoryContainer>
        <Sidebar />
        <TableContainer component={Paper} style={{ marginLeft: 20, marginTop: 20 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Nome</b></TableCell>
                <TableCell><b>Descrição</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((category) => (
                <TableRow key={category.id}>
                  <TableCell style={{ height: 50, width: 100 }}>{category.name}</TableCell>
                  <TableCell>{category.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CategoryContainer>
    </>
  );
}