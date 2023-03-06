import React, { useState } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { VscBellDot } from "react-icons/vsc";
import styled, { css } from "styled-components";

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setPrice(value.toLocaleString('ko-KR'));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert(`name : ${name},  price : ${price}`  )
  };

  return (
    <div>
      <h1>Button</h1>
      <Wrapper>
        <StBtn onClick={()=>{alert('버튼을 클릭하셨습니다')}} theme = {'LargePrime'}>Large Primary Button <TfiAngleRight/></StBtn>
        <StBtn theme={'NormalMedium'}>Medium</StBtn>
        <StBtn theme={'NormalSmall'}>Small</StBtn>
      </Wrapper>
      <Wrapper>
        <StBtn onClick={()=>{prompt('어렵나요?')}} theme={'LargeNegative'}>Large Negative Button <VscBellDot/></StBtn>
        <StBtn theme={'NegativeMedium'}>Medium</StBtn>
        <StBtn theme={'NegativeSmall'}>Small</StBtn>
      </Wrapper>

      <h1>Input</h1>
      <Wrapper>
        <form onSubmit={onSubmitHandler}>
        이름 : <Stinput value={name} onChange={(event)=>setName(event.target.value)}/> &nbsp;
        가격 : <Stinput type = 'number' value={price} onChange={(event)=>onChangeHandler(event)}/> &nbsp;
        <StBtn theme={'NormalSmall'}>저장</StBtn>
        </form>
      </Wrapper>
      <h1>Modal</h1>
      <h1>Select</h1>
    </div>
  )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`

const StBtn = styled.button`
  border-radius: 8px;
  width: 200px;
  height: 50px;

  border: 3px solid #15de9b;
  background-color: transparent;
  ${({theme}) => {
    switch (theme){
      case 'LargePrime':
        return css`
          cursor : pointer;
          font-Weight : bold;
        `
      case 'LargeNegative':
        return css`
          cursor : pointer;
          font-Weight : bold;
          color : #cf0606;
          border : 3px solid #f29c9c;
        `
      case 'NormalMedium':
        return css`
          background-color: #15de9b;
          width : 130px;
          height: 45px;
        `
      case 'NormalSmall':
        return css`
          background-color: #15de9b;
          width : 100px;
          height: 40px;
        `
      case 'NegativeMedium':
        return css`
          background-color: #f29c9c;
          border : 3px solid #f29c9c;
          width : 130px;
          height: 45px;
        `
      case 'NegativeSmall':
        return css`
          background-color: #f29c9c;
          border : 3px solid #f29c9c;
          width : 100px;
          height: 40px;
        `
    }
  }}
`
const Stinput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 8px;
`

export default App;
