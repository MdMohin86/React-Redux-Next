import styles from "./MapItems.module.css";

const MapItems = ({items}) => {
//   let { items } = props;


  return (
    <>
      {items.map((item) => {
      const buyBtn = () => {alert(`${item} bought`)};

        return (
          <li className={` ${styles.listItem} `}>
            {item}
            <button className={`btn btn-success ${styles.sBtn}`} onClick = {buyBtn}>BUY</button>
          </li>
        );
      })}
       
    </>
  );
};

export default MapItems;