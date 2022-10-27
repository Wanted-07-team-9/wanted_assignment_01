import styled from 'styled-components'
const Filter = () => {
  return(
    <FilterWrapper>
    {/* <FilterDiv className='all' filterId={1} current={filterState} onClick={() => handleFilter(1)}>All</FilterDiv>
    <FilterDiv className='doneFIlter' filterId={2} current={filterState} onClick={() => handleFilter(2)}>Done!</FilterDiv>
    <FilterDiv className='notYetFilter' filterId={3} current={filterState} onClick={() => handleFilter(3)}>Not yet</FilterDiv> */}
    <FilterDiv>All</FilterDiv>
    <FilterDiv>Done</FilterDiv>
    <FilterDiv>Not yet</FilterDiv>
  </FilterWrapper>
  )
}

const FilterWrapper = styled.div`
  display: flex;
  justify-content:end;
  margin: 2.5% 0;
  font-weight: bold;
  font-size: 150%;
  transition : all ease 0.3s 0.3s;
`
const FilterDiv = styled.div`
    cursor: pointer;
    padding:1rem;
    background-color : ${(props) => props.filterId === props.current ? 'var(--color-mauve)' : 'var(--color-blue )'};
    color: ${(props) => props.filterId === props.current ? 'var(--color-black)' : 'var(--color-white)'};
    border-radius: 1rem;
    margin-right: 1%;
    :hover{
        scale:1.1;
      }
`


export default Filter