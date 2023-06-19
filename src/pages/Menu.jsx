import React, { useEffect } from "react";
import styled from "styled-components";
import { logOut } from "../redux/userRedux";
import { DataGrid } from "@material-ui/data-grid";
import JsPDF from "jspdf";
import "../styles/menu.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import DashBoard from "./DashBoard";
import Seller from "./Seller";
import ProductsModal from "../components/ProductsModal";
import { useSelector, useDispatch } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Products from "../components/Products";
import Product from "../components/Product";
import { publicRequest } from "../requestMethods";
import {
  FontDownload,
  DeleteOutline,
  DataUsageSharp,
} from "@material-ui/icons";
import Table from "react-bootstrap/Table";
import ProductDataGrid from "../components/ProductDataGrid";

const Container = styled.div`
  margin: 50px;
  font-weight: 900px;
`;

const Wrapper = styled.div`
  display: flex;

  padding: 5px;

  flex-wrap: wrap;

  margin: 10px;

  @media screen and (max-width: 600px) {
    margin: 10px;
  }
`;

const Left = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Right = styled.div`
  flex: 4;
`;

const Button = styled.button`
  margin: 10px 0px;
  padding: 15px;
  font-size: 15px;
  font-weight: 900;
  border: none;

  color: #dcca87;
  background-color: #0c0c0c;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Header = styled.h5`
  font-family: "Roboto";
`;

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setproducts] = React.useState([]);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    setOpen(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logOut());
    history.push("/seller");
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          `/products?category=${user.seller}`
        );

        setproducts(res.data);
      } catch (error) {}
    };

    getProducts();
  }, []);

  const generatePDF = () => {
    const report = new JsPDF("landscape", "pt", "a3");
    report.html(document.querySelector(".product")).then(() => {
      report.save("products.pdf");
    });
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },

    {
      field: "product",
      headerName: "Products",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.img}
              alt=""
              height="100px"
              width="100px"
            />
            {params.row.title}
          </div>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="productListEdit">Edit</button>

            <DeleteOutline className="productListDelete" />
          </>
        );
      },
    },
  ];
  console.log(data);
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="profile" title="Home">
          <Button onClick={generatePDF}>
            Download PDF <FontDownload></FontDownload>
          </Button>
          <div className="product">
            <Header>Credence Products</Header>
            <Wrapper>
              {data.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </Wrapper>
          </div>
        </Tab>
        <Tab eventKey="home" title="Add Product">
          <DashBoard />
        </Tab>
        <Tab eventKey="manage" title="Manage">
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Stock</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="products">
                      <img src={product.img} alt="" />
                      <h5>{product.title}</h5>
                    </div>
                  </td>
                  <td>
                    <button className="update">Update</button>
                  </td>
                  <td>
                    <DeleteOutline className="delete"/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="orders" title="Orders">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Orders</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="products">
                      <img src={product.img} alt="" />
                      <h5>{product.title}</h5>
                    </div>
                  </td>
                  <td>
                    <span>pending</span>
                  </td>
                  <td>
                    <button className="update">Update</button>
                  </td>
                  <td>
                    <DeleteOutline className="delete"/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="contact" title="My Account">
          <Button onClick={handleLogout}>Logout</Button>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Menu;
