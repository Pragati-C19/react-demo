import ChildComponent from "./child-componet";

const parentComponent = () => {
  //learn about chid and parent communication
  const greetParent = (childName) => {
    alert(`Hello Parent.. I'm ${childName} your Fav Daughter`);
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent}> </ChildComponent>
    </div>
  );
};

export default parentComponent;
