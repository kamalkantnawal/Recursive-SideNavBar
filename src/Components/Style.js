import styled from "styled-components";

export const Bodydiv = styled.div`
  display: flex;
  height: 100vh;
  flex-grow: 0;

  .sidebar {
    background-color: blue;
    height: 100%;
  }
  .child-list {
    display: flex;
    width: 300px;
    cursor: pointer;
    overflow: hidden;
  }
  .child-itmes {
    margin-top: 5px;
    margin-right: 5px;

    color: white;
  }
`;
