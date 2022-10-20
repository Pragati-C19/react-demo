//import { ReactDOM } from "react";

const dataList = () => {
  const dataEvent = [
    {
      id: 1,
      title: "Pragati's Day",
      Start: "12th Oct 2022",
    },
    {
      id: 2,
      title: "Prags's Day",
      Start: "12th Oct 2022",
    },
    {
      id: 3,
      title: "Mayank's Day",
      Start: "12th Oct 2022",
    },
    {
      id: 4,
      title: "Shubham's Day",
      Start: "12th Oct 2022",
    },
    {
      id: 5,
      title: "Kiran's Day",
      Start: "12th Oct 2022",
    },
  ];
  const listItems = dataEvent.map((data) => (
    <div>
      <li key={data.id}>{data.title}</li>
      <p> {data.Start}</p>
    </div>
  ));

  return <ul>{listItems}</ul>;
};

export default dataList;
