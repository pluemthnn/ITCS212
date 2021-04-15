import React from 'react'
import styled from 'styled-components'

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
`

const DivForm = styled.div`
  margin: 1rem;
  padding: 1rem;
  background-color: #f5f5f7;
`
const DivButtom = styled.button`
  margin-left: 0.2rem;
`

class RecipePage extends React.Component {
    render() {
        return (
            <DivContainer>
                <h1>Explore Recipe</h1>
                <DivForm>
                    <label>Are you looking for something to cook? </label>
                    <input type="text"></input>
                    <DivButtom type="button">Go go!!</DivButtom>
                </DivForm>

            </DivContainer>
        );
    }
}
export default RecipePage