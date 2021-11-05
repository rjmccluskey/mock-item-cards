import ReactDOM from "react-dom";
import { ItemList } from "./components";
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
  <ChakraProvider><ItemList/></ChakraProvider>,
  document.getElementById("root")
);
