import "./App.scss";
import MatecuTopbarLayout from "../lib/components/MatecuTopbarLayout";
import MatecuTopbarHeaderRow from "../lib/components/MatecuTopbarHeaderRow";
import MatecuTopbarHeaderColumn from "../lib/components/MatecuTopbarHeaderColumn";
import MatecuTopbarAction from "../lib/components/MatecuTopbarAction";
import MatecuTopbarFab from "../lib/components/MatecuTopbarFab";
import MatecuTopbarSearch from "../lib/components/MatecuTopbarSearch";
import MatecuTopbarTitle from "../lib/components/MatecuTopbarTitle";
import MatecuTopbarBody from "../lib/components/MatecuTopbarBody";
function App() {
  const searchValueChangesHandler = (value: string) => {
    console.log("Buscando valor", value);
  };
  return (
    <>
      <MatecuTopbarLayout
        prominent={true}
        firstRow={
          <MatecuTopbarHeaderRow
            leftColumn={
              <MatecuTopbarHeaderColumn>
                <MatecuTopbarAction>L</MatecuTopbarAction>
                <MatecuTopbarAction>L1</MatecuTopbarAction>
                <MatecuTopbarFab>
                  <button className="fabbtn">+</button>
                </MatecuTopbarFab>
                <MatecuTopbarTitle>
                  {/* <h1>Hola mundo</h1> */}
                  hola
                </MatecuTopbarTitle>
              </MatecuTopbarHeaderColumn>
            }
            rightColumn={
              <MatecuTopbarHeaderColumn>
                <MatecuTopbarAction>R</MatecuTopbarAction>
                <MatecuTopbarSearch
                  placeholder="Buscar..."
                  valueChangesHandler={searchValueChangesHandler}
                />
              </MatecuTopbarHeaderColumn>
            }
          />
        }
        body={
          <MatecuTopbarBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi hic
            ipsum enim, omnis perferendis, ea quo nemo libero modi eos fuga
            earum aut qui excepturi et dolor velit, eligendi nobis? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Sequi hic ipsum enim,
            omnis perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sequi hic ipsum enim, omnis
            perferendis, ea quo nemo libero modi eos fuga earum aut qui
            excepturi et dolor velit, eligendi nobis?
          </MatecuTopbarBody>
        }
      ></MatecuTopbarLayout>
    </>
  );
}

export default App;
