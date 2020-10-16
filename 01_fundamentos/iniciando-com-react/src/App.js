import React from 'react';

//componente funcional
// function componenteFuncional() {
//   return (
//     <> 
//       <h1>
//         Ola Mundo
//       </h1>
//     </>
//   );
// }

// componente de classe

class App extends React.Component{
  //estado local do ocmponente
  state = {
    nome: "Anderson B. Silva"
  }

  //padrão arraow function
  modificarNome = (event) => {
    console.log(event.target.value)
    const newValue = event.target.value

    //atualizando o estado
    this.setState({
      nome: newValue
    })
  }

  criaComboBox = () => {
    const opcoes = ['Fulano', 'Ciclano']
    
    const comBoxOptions = opcoes.map( opcao => <option key={opcao}>{ opcao }</option> )

    return (
      <select>
          { comBoxOptions }
      </select>
    )

    
  }
  
  componentDidMount(){
    //alert('erro')
    console.log('OPa executou o didMount')
  }

  render(){
    console.log('Exec render')
    const MeuSelectList =  () => this.criaComboBox()
    
    return (
      <>
        <h1>Ola Mundo {this.state.nome} - {this.props.developer} </h1>
        <input type="text"  value={this.state.nome} onChange={this.modificarNome}/>
        { this.criaComboBox() }
        <MeuSelectList />
      </>
    )
  }
}

function AppFuncional(props){
 

  const criaComboBox = () => {
    const opcoes = ['Fulano', 'Ciclano']
    
    const comBoxOptions = opcoes.map( opcao => <option key={opcao}>{ opcao }</option> )

    return (
      <select>
          { comBoxOptions }
      </select>
    )

    
  }
  
  

  
    console.log('Exec render')
    const MeuSelectList =  () => criaComboBox()
    
    return (
      <>
        <h1 className="texto-centralizado">Ola Mundo - {props.developer} </h1>
        <input type="text"  />
        { criaComboBox() }
        <MeuSelectList />
      </>
    )
  
}
export default AppFuncional;
