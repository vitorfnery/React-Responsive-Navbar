import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  a {
    text-decoration: none;
    color: #413e3e;
  }
  a:hover {
    color: #f39494;
    background-color: #51dddd;
    padding: 0.125rem;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    a {
      color: #fff;
    }
    a:hover {
      color: #76bb68;
      background-color: #ec95af;
    }
  }
`;

export default Ul;
