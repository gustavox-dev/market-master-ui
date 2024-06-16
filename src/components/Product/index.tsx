import { useProductData } from '../../hoocks/useProductData';
import { ProductData } from '../../interface/ProductData';
import Sidebar from '../Sidebar';
import { ProductCard, ProductName, ProductDescription, ProductDetails, ProductCategoryList, ProductCategoryItem, ProductContainer, ProductContent } from './styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export function Product() {
  const { data } = useProductData();

  return (
    <>
      <h1>Produtos</h1>
      <ProductContainer>
        <Sidebar />
        <ProductContent>
          <TableContainer component={Paper} style={{ marginLeft: 20, marginTop: 20 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Nome</b></TableCell>
                  <TableCell><b>Descrição</b></TableCell>
                  <TableCell><b>Valor</b></TableCell>
                  <TableCell><b>Estoque</b></TableCell>
                  {/* <TableCell>Categorias</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>{product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.quantityInStock}</TableCell>
                    {/* <TableCell>
                      {product.category.name}
                    </TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ProductContent>
      </ProductContainer>
    </>
  );
}