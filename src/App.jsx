import React, { useState, useRef } from "react";
import { TfiAngleRight } from "react-icons/tfi";
import { VscBellDot } from "react-icons/vsc";
import styled, { css } from "styled-components";

function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const outSection = useRef();

  const onChangeHandler = (event) => {
    let str = event.target.value
    let newstr = Number(str.replaceAll(',',''))
    if(isNaN(newstr)){
        setPrice(0)
    }else {
      const formatValue = newstr.toLocaleString('ko-KR');
       setPrice(formatValue)
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert(`name : ${name},  price : ${price.replaceAll(',','')}`)
  };

  const [toggle, setToggle] = useState(false)
  const toggleModal = () => {
    setToggle(!toggle)
  }

  const [toggle2, setToggle2] = useState(false)
  const showModal = () => {
    setToggle2(!toggle2)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const options = ['리액트', '자바', '스프링', '리액트 네이티브'];

  const handleOptionHandler = (option) => {
      setSelectedOption(option)
      setIsOpen(false)
  }
  const handleOptionHandler2 = (option) => {
    setSelectedOption2(option)
    setIsOpen2(false)
}


  return (
    <div>
      <h1>Button</h1>
      <Wrapper>
        <StBtn onClick={()=>{alert('버튼을 클릭하셨습니다')}} theme = {'LargePrime'}>Large Primary Button <TfiAngleRight/></StBtn>
        <StBtn theme={'NormalMedium'}>Medium</StBtn>
        <StBtn theme={'NormalSmall'}>Small</StBtn>
      </Wrapper>
      <Wrapper>
        <StBtn onClick={()=>{prompt('어렵나요?')}} theme={'LargeNegative'}>Large Negative Button<VscBellDot/></StBtn>
        <StBtn theme={'NegativeMedium'}>Medium</StBtn>
        <StBtn theme={'NegativeSmall'}>Small</StBtn>
      </Wrapper>

      <h1>Input</h1>
      <Wrapper>
        <form onSubmit={onSubmitHandler}>
        이름 : <Stinput value={name} onChange={(event)=>setName(event.target.value)}/> &nbsp;
        가격 : <Stinput type = 'text' value={price} onChange={(event)=>onChangeHandler(event)}/> &nbsp;
        <StBtn theme={'NormalSmall'}>저장</StBtn>
        </form>
      </Wrapper>

      <h1>Modal</h1>
      <Wrapper>
        <StBtn theme={'NormalSmall'} onClick={toggleModal}>open modal</StBtn>
        {toggle ? 
        <ModalLayout>
          <ModalContent>
            닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
            <Wrapper style={{display:'block',float:'bottom', marginTop : '128px'}}>
              <StBtn theme={'NegativeSmall'} onClick={toggleModal}>닫기</StBtn>
              <StBtn theme={'NormalSmall'}>확인</StBtn>
            </Wrapper>
          </ModalContent>
        </ModalLayout> : null}
        
        <StBtn theme={'LargeNegative'} onClick={showModal}>open modal</StBtn>
        {toggle2 ? 
        <ModalLayout ref={outSection} onClick={(event) => {
          if(outSection.current === event.target){
            setToggle2(false)
          }
        }}>
          <ModalContent>
            닫기 버튼 1개가 있고, <StCancelBtn onClick={showModal}>X</StCancelBtn><br/>
            외부 영역을 누르면 모달이 닫혀요.
          </ModalContent>
        </ModalLayout>
        :null}
      </Wrapper>
        
      <h1>Select</h1>
      <SelectWrapper>
        <SelectContainer>
          <SelectHeader onClick={()=>setIsOpen(!isOpen)}>
            <span>{selectedOption || 'Select an option'}</span>
            <span>{isOpen ? '▲' : '▼'}</span>
          </SelectHeader>
        {isOpen && (
          <SelectList>
          {options.map((option) => (
            <Option key={option} onClick={() => handleOptionHandler(option)}>
              {option}
            </Option>
          ))}
        </SelectList>
      )}
        </SelectContainer>
        <div style={{overflow:'hidden', height:'150px', display:'flex', alignItems:'center'}}>
        <SelectContainer>
          <SelectHeader onClick={()=>setIsOpen2(!isOpen2)}>
            <span>{selectedOption2 || 'Select an option'}</span>
            <span>{isOpen2?'▲' : '▼'}</span>
          </SelectHeader>
          {isOpen2 && <SelectList>
            {options.map((item)=>(
              <Option key={item} onClick={()=>handleOptionHandler2(item)}>
                {item}
              </Option>
            ))}
          </SelectList>
      }
        </SelectContainer>
      </div>
      </SelectWrapper>
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
          cursor : pointer;
          background-color: #15de9b;
          width : 130px;
          height: 45px;
          :active{
            background-color: #178a69;
          }
        `
      case 'NormalSmall':
        return css`
          cursor : pointer;
          background-color: #15de9b;
          width : 100px;
          height: 40px;
          :active{
            background-color: #178a69;
          }
        `
      case 'NegativeMedium':
        return css`
          cursor : pointer;
          background-color: #f29c9c;
          border : 3px solid #f29c9c;
          width : 130px;
          height: 45px;
          :active{
            background-color: #a52121;
          }
        `
      case 'NegativeSmall':
        return css`
          cursor : pointer;
          background-color: #f29c9c;
          border : 3px solid #f29c9c;
          width : 100px;
          height: 40px;
          :active{
            background-color: #a52121;
          }
        `
    }
  }}
`
const Stinput = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 8px;
`
const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const ModalContent = styled.div`
  background-color: #fff;
  height: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  max-width: 80%;
  max-height: 80%;
`

const StCancelBtn = styled.span`
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius:25px;
  border: 2px solid grey;
  :hover{
    border: 2px solid black;
  }
`
const SelectWrapper = styled.div`
  border: 2.5px solid #bfbfbf;
  background-color: #ffffff;
  width: 100vw;
  height: 150px;
  display: flex;
  align-items: center;
  z-index: 1;
`
const SelectContainer = styled.div`
  position: relative;
  width: 400px;
`

const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`

const SelectList = styled.div`
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: scroll;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  z-index: 1;
`

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default App;
