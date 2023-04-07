import classes from "./classlist.module.css";

export function Cardlist({ listData }) {
  console.log(listData);
  return (
    <div className={classes.card}>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <div className={classes.li_card}>
            {/* &nbsp; */}
            <div className={classes.card_image}></div>
            <div className={classes.card_title}>Divsiion</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

// {
//   listData.map((data) => {
//     return (
//       <li
//         key={data.id}
//         className={classes.li}
//         background={data.background}
//         after={data}
//       >
//         <div className={classes.li_card}>
//           {/* &nbsp; */}
//           <div className={classes.card_image}></div>
//           <div className={classes.card_title}>Divsiion</div>
//         </div>
//       </li>
//     );
//   });
// }
