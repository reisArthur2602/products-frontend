import { useState } from "react";
import ProductRegister from "./components/ProductRegister";
import ProductList from "./components/ProductList";
import CategoryRegister from "./components/CategoryRegister";
import CategoryList from "./components/CategoryList";

const App = () => {
  const [isVisible, setIsVisible] = useState(1);

  const selectComponent = () => {
    switch (isVisible) {
      case 1:
        return <ProductRegister />;
      case 2:
        return <ProductList />;
      case 3:
        return <CategoryRegister />;
      case 4:
        return <CategoryList />;
    }
  };
  return (
    <div>
      <button onClick={()=> setIsVisible(1)}>Cadastro de Produtos</button>
      <button onClick={()=> setIsVisible(2)}>Listagem de produtos</button>
      <button onClick={()=> setIsVisible(3)}>Cadastro de Categorias</button>
      <button onClick={()=> setIsVisible(4)}>Listagem de Categorias</button>
     {selectComponent()}
    </div>
  );
};

export default App;
