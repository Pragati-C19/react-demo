const nameList = () => {
  const names = ["Pragati", "Mayank", "Shubham", "Kiran"];
  return (
    <div>
      {names.map((name) => {
        //here key is used bcoz without that its showing error that The list should have a unique "Key" pop
        return <p key={name}>{name}</p>;
      })}
    </div>
  );
};

export default nameList;
