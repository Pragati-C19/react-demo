
const ClickHandler = () => {
    //count is just a number it's not counting how many time that button is clicked
    const clickHandler=(event, count=1)=>{
        console.log("Button Clicked",count)
        
    }
    return (
        <div>
            <button onClick={clickHandler}>Subscribe</button>
            <button onClick={(event)=>{clickHandler(event,5)}}>Subscribe 5</button>
        </div>
    );
        
  };
  
  export default ClickHandler;
  