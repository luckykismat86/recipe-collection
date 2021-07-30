import React from 'react';



class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }
  
  handleRecipeInstructionsChange = (event) => {
    const value = event.target.value;
  
    this.setState({newRecipeInstructions: value});
  }
  
  handleRecipeNameChange = (event) => {
    const value = event.target.value;
  
    this.setState({newRecipeName: value});
  }

  toggleAddRecipeForm = () => {
    this.setState({isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed})
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
  
    this.setState({[name]: target.value});
  }
 
  submitRecipe = (event) => {
    event.preventDefault()
    const updateRecipe =(state) => {
      const recipe ={
          name: this.state.newRecipeName,
          instructions:this.state.newRecipeInstructions
      }
      return{
        recipes: state.recipes.concat([recipe])
      }
    }
    this.setState(updateRecipe)
    this.setState({newRecipeName:""})
    this.setState({newRecipeInstructions:""}) 
  }

 
 

  render(){
    const addNewRecipeForm = (
        <form id="recipe-form" onSubmit={this.submitRecipe} >
          <label htmlFor="newRecipeName">Recipe name: </label>
          <input type="text"
            id="newRecipeName"
            name="newRecipeName"
            onChange={this.handleChange}
            value={this.state.newRecipeName} />
          <label htmlFor="newRecipeInstructions">Instructions:</label>
          <textarea id="newRecipeInstructions"
            name="newRecipeInstructions"
            placeholder="write recipe instructions here..."
            onChange={this.handleChange}
            value={this.state.newRecipeInstructions} />
          <input type="submit" />
        </form>
      )
  
      return (
        <div className="App">
          <h1 className="App-header">My Recipes</h1>
          {
            this.state.isAddRecipeFormDisplayed
            ? addNewRecipeForm
            : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
          }
          {
            this.state.recipes.length > 0 ?
            <ul>
               {this.state.recipes.map((recipe)=>{
                 return (
                   <li key={recipe.name}>{recipe.name}: {recipe.instructions}</li>
                 )
               })
              } 
             {/* <li>{this.state.recipes[0].name}</li>,<p></p> */}
             
            </ul> :
            <p>There are no recipes to list.</p>
          }
        </div>
      )
    // return (
    //   <div className="App">
    //     <h1 className="App-header">My Recipes</h1>
    //     {/* {
    //       this.state.recipes.link === 0
    //       ? <p>There are no recipes to list.</p>
    //       : <li>{this.state.recipes[0].name};
    //       {this.state.recipes[0].instructions}
    //       </li>
    //     } */}
        
    //     {
    //       this.state.isAddRecipeFormDisplayed
    //       ? addNewRecipeForm
    //       // screen.getByRole('button', {
    //       //   name: /add recipe/i
    //       // })
    //       : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
    //     }
    //     <p>There are no recipes to list.</p>
    //   </div>
    // )
  }
}

export default App;

// {
//   this.state.recipes.length === 0
//   ? <p>There are no recipes to list.</p>
//   : <li>{this.state.recipes[0].name}: {this.state.recipes[0].instructions}</li>
// }