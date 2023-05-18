import React from "react";
import styled from "styled-components";

const Container = styled.div`

margin:0% 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 30px;
`;

const Input = styled.input`
  margin: 20px 0px;
  padding: 10px;
  font-weight: bold;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  font-weight: 900;
  font-size: 25px;
  background-color: #0c0c0c;
  color: #dcca87;
  cursor: pointer;
  margin:20px 0px;
`;
const Heading = styled.h3`
  font-weight: 900;
  font-size: 25px;
  margin: 20px;
`;
const Label = styled.label`
  font-weight: 900;
  font-size: 20px;
`;
const TextArea = styled.textarea`
  padding: 30px;
`;

const Select = styled.select`
  padding:10px;
  font-weight:bold;
`;
const DashBoard = () => {
  return (
    <Container>
      <Heading>Create Product</Heading>
      <Wrapper>
        <Label>Image</Label>
        <Input placeholder="Email" type="file" />
        <Label>Video</Label>
        <Input placeholder="Email" type="file" />
        <Label>Title</Label>
        <Input placeholder="Email" type="text" />
        <Label>Description</Label>
        <TextArea />
        <Label>Original Price</Label>
        <Input type="number" />
        <Label>Discount Price</Label>
        <Input placeholder="500" type="number" />
        <Label>Wholeseller</Label>
        <Input placeholder="Credence" type="text" />
        <Label>Wholesale Price</Label>
        <Input placeholder="200" type="number" />
        <Label>Wholesale Minimum Quantity</Label>
        <Input placeholder="10" type="number" />
        <Label>Brand</Label>
        <Input placeholder="Kiss Beauty" type="text" />
        <Label>Category</Label>
        <Input name="category" placeholder="jeans,pajamas" type="text" />
        <Label>Concern</Label>
        <Input
          name="concern"
          type="text"
          placeholder="Dandruff,whitening,small circles"
        />
        <Label>Skin Type</Label>
        <Input name="skintype" type="text" placeholder="normal,dry,all" />
        <Label>Instock</Label>
        <Select name="inStock" >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Select>

        <Button  className="addProductButton">
          Create
        </Button>
      </Wrapper>
    </Container>
  );
};

export default DashBoard;
