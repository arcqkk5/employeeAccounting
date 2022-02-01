import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "like", label: "На повышение" },
    { name: "more800", label: "З/П больше 800$" },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const activ = props.filter === name;
    const classBtn = activ ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${classBtn}`}
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
