import React, { useState, useEffect } from 'react'
import Menu from '../fragments/Menu.js'; 
import Footer from '../fragments/Footer.js'; 
import '../css/Tiendas.css';
import { Grid2 } from '@mui/material';
import { ApiCalls } from '../service/ApiCalls.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Stack } from 'react-bootstrap';
import {Table, Header, HeaderRow, HeaderCell, Body, Row, Cell,} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { usePagination} from '@table-library/react-table-library/pagination';
import {temaTabla} from '../css/TemaTabla.js';
import { Helmet } from 'react-helmet';



const ListarTiendas = () => {

    /*useEffect(() => {
        getProductos();
    }, []);

    const [list, setList] = useState([]);

    const getTiendas = () => {
      ApiCalls.getTiendas()
            .then((response) => {
                setList(response.data)
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }
    
    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
      setSearch(event.target.value);
    };

    const data = {
      nodes: list.filter((item) => item.FILTRO.toLowerCase().includes(search.toLowerCase())),
    };*/
    const [list, setList] = useState([]);
    const data = {
        nodes: list.filter((item) => item.FILTRO.toLowerCase().includes(search.toLowerCase())),
      }
    const theme = useTheme(temaTabla)
    
    const pagination = usePagination(data, {
        state: {
          page: 0,
          size: 10,
        },
      });

    const [ids, setIds] = React.useState([]);
    const [search, setSearch] = React.useState('');

    const handleSearch = (event) => {
      setSearch(event.target.value);
    };

    return (
      
        <div className="container-house">
          <Helmet>
            <title>Ver Tiendas | Stockearte</title>
          </Helmet>
          <Menu /> 
            <Grid2 container spacing={2}>
                 <Grid2 item xs={2}></Grid2>
                <Grid2 item xs={12} md={8}>
                <div className='p-5 text-center'>
                <h1 className="mb-3 text-center">Listado Tiendas</h1>
                </div>
                <Stack gap = {2}>
                <InputGroup className="mb-3" size="sm">
                <InputGroup.Text id="inputGroup-sizing-sm">Busqueda por CODIGO:&nbsp;</InputGroup.Text>
                  <FormControl  className="search" value={search} onChange={handleSearch} />
                 </InputGroup>
                </Stack>
                <Table data={data} theme={theme} pagination={pagination}>
                    {(tableList) => (
                        <>
                        <Header>
                        <HeaderRow>
                          <HeaderCell >Codigo</HeaderCell>
                          <HeaderCell >Estado</HeaderCell>
                        </HeaderRow>
                      </Header>
                        <Body>
                            {tableList.map((item) => (
                            <React.Fragment key={item.codigo}>
                            <Row item={item}>
                            <Cell>{item.codigo}</Cell>
                            <Cell>{item.habilitada}</Cell>         
                            </Row>
                            </React.Fragment>
                            
                            ))}
                        </Body>
                         </>
                         )}
                </Table>
                <div
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>
          Página:{' '}
          {pagination.state.getPages(data.nodes).map((_, index) => (
            <button
              key={index}
              type="button"
              style={{
                fontWeight:
                  pagination.state.page === index
                    ? 'bold'
                    : 'normal',
              }}
              onClick={() => pagination.fns.onSetPage(index)}
            >
              {index + 1}
            </button>
          ))}
        </span>
      </div>
                </Grid2>
            </Grid2>
            <Footer /> 
        </div>
    )
}

export default ListarTiendas
