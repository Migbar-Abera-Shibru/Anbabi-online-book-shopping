import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import car from "../assets/car.jpg";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import cov from "../assets/cov.jpg";
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`

`;

const Wrapper = styled.div`
padding:20px;
`;

const Title = styled.h1`
font-weight:300;
text-align:center;
`;

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`;

const TopButton =styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${(props)=>props.type === 'filled' && 'none' };
background-color:${(props)=>
    props.type === 'filled' ? '#3D2B1F' :'transparent' };
color:${(props)=>props.type === 'filled' && 'white' };
`;

const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin : 0px 10px;
`;

const Bottom = styled.div`
display:flex;
justify-content:space-between;
`;

const Info = styled.div`
flex:3;
`;

const Book = styled.div`
display:flex;
justify-content:space-between;
margin-bottom:15px;
`;

const BookDetail = styled.div`
flex:2;
display:flex;
`;

const Image = styled.img`
width:230px;
height:310px
`;

const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
margin:30px 0px;
padding-bottom:10px;
`;

const BookName = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;

const BookCategory = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;
const BookEdition = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;
const BookAuthor = styled.span`
padding-bottom:26px;
padding-left: 45px;
`;
const PriceDetails = styled.span`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const BookAmountContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:20px;
`;

const BookAmount = styled.div`
font-size:24px;
margin:5px;
`;

const BookPrice = styled.div`
font-size:30px;
font-weight:200;
`;

const Hr = styled.hr`
background-color:#eee;
border:none;
height:10px;
`;

const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding: 20px;
height:50vh;
`;

const SummaryTitle = styled.h1`
font-weight:200;
`;

const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${(props)=>props.type === 'total' && '500' };
font-size:${(props)=>props.type === 'total' && '24px' };
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`

`;

const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color:#3D2B1F;
font-weight:600;
color:white;
`;


const MyCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
          <Title>MY CART</Title>
          <Top>
              <TopButton><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>CONTINUE SHOPPING</Link></TopButton>
              <TopTexts>
                  <TopText>Shopping cart ({cart.quantity})</TopText>
              </TopTexts>
              <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
              <Info>
              {cart.Books.map((book) => (
                  <Book>
                      <BookDetail>
                          <Image src={book.img} />
                          <Details>
                              <BookName>
                              <b>Book:</b> {book.title} 
                              </BookName>
                              <BookCategory>
                              <b>Category:</b> {book.category}
                              </BookCategory>
                              <BookAuthor>
                                <b>Author:</b>{book.author}
                              </BookAuthor>
                              <BookEdition>
                                <b>Edition:</b> {book.edition}
                              </BookEdition>
                          </Details>
                      </BookDetail>
                      <PriceDetails>
                          <BookAmountContainer>
                              <Add />
                              <BookAmount>{book.quantity}</BookAmount>
                              <Remove />
                          </BookAmountContainer>
                          <BookPrice>{book.price * book.quantity} Birr</BookPrice>
                      </PriceDetails>
                  </Book> 
              ))}
             
              </Info>
              <Hr />
              <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                      <SummaryItemText>Subtotal</SummaryItemText>
                      <SummaryItemPrice>{cart.total} Birr</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                      <SummaryItemText>Estimated Shipping</SummaryItemText>
                      <SummaryItemPrice>20 Birr</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                      <SummaryItemText>Shipping Discount</SummaryItemText>
                      <SummaryItemPrice>-5 Birr</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type='total'>
                      <SummaryItemText>Total</SummaryItemText>
                      <SummaryItemPrice>{cart.total} Birr</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryButton>CHECKOUT NOW</SummaryButton>
              </Summary>
          </Bottom>
      </Wrapper>
      <Footer / >
    </Container>
  )
}

export default MyCart
