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

class MenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FoodSearch: '',
            Food: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(changeObject) {
        this.setState({
            [changeObject.target.name]: changeObject.target.value,
        });
    }

    async handleSubmit(changeObject) {
        changeObject.preventDefault()
        let APi_key = "e409db5905de491e9c425da1f6300f6e";
        let rooturl = `https://api.spoonacular.com//food/menuItems/search?apiKey=${APi_key}&query=${this.state.FoodSearch}`;

        await fetch(rooturl).then((res) => res.json()).then((data) => {
            console.log(data);
            this.setState({
                Food: data.menuItems,
            })
        })
    }

    render() {
        return (
            <>
            <DivContainer>
                <h1>Explore Menu</h1>
                <DivForm>
                    <label>Are you looking for food? </label>
                    <input id="FoodSearch" name="FoodSearch" type="text" value={this.state.studentID}
                        onChange={this.handleChange}/>
                    <DivButtom type="button" onClick={this.handleSubmit}>Search</DivButtom>
                </DivForm>
            </DivContainer>
            <div>
            {this.state.Food && this.state.Food.map((m) => {
                console.log(m.title);
                return (<>
                <div key={m.id}>
                <p>{m.title}</p>
                <img src={m.image} alt={m.title}></img>
                </div>
               </>)
            })}
            </div>
            </>
        );
    }
}
export default MenuPage