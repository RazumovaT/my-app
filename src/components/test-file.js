// import { React, Component } from "react";
// import { useState } from "react";
// import { formatDistance } from "date-fns";
// import PropTypes from "prop-types";

// let propTypes = require("prop-types");

// export default class NewTaskForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       label: "",
//     };
//   }
//   static defaultProps = {
//     label: "",
//     done: false,
//     id: Math.random(),
//     onDeleted: () => {},
//     onItemDone: () => {},
//   };

//   static propTypes = {
//     label: propTypes.string.isRequired,
//     done: propTypes.bool,
//     id: propTypes.number,
//     onDeleted: propTypes.func,
//     onItemDone: propTypes.func,
//   };

//   onInputChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       label: e.target.value,
//     });
//   };

//   onItemSubmit = (e) => {
//     e.preventDefault();
//     this.props.onItemAdded(this.state.label);
//     this.setState({
//       label: "",
//     });
//   };

//   render() {
//     const {
//       todos,
//       label,
//       done,
//       id,
//       isEdit,
//       createdAt,
//       onDeleted,
//       onItemDone,
//       onItemEdit,
//       onItemAdded,
//     } = this.props;

//     let classCompleted = "";
//     if (done) {
//       classCompleted += "completed";
//     }
//     if (isEdit) {
//       classCompleted += " editing";
//       return (
//         <form onSubmit={this.onItemSubmit}>
//           <input
//             type="text"
//             className="edit"
//             value={label}
//             onChange={this.onInputChange}
//           />
//         </form>
//       );
//     }
//     return (
//       <li className={classCompleted} onClick={onItemDone}>
//         <div className="view">
//           <input className="toggle" type="checkbox" />
//           <label>
//             <span className="description" id={id}>
//               {label}
//             </span>
//             <span className="created">
//               created{" "}
//               {formatDistance(createdAt, Date.now(), {
//                 includeSeconds: true,
//               })}{" "}
//               ago
//             </span>
//           </label>
//           <button className="icon icon-edit" onClick={onItemEdit}></button>
//           <button className="icon icon-destroy" onClick={onDeleted}></button>
//         </div>
//       </li>
//     );
//   }
// }


// const [arr, setArr] = useState(todos);

// function editSave(index, event) {
//   event.preventDefault();
//   const copy = JSON.parse(JSON.stringify(todos));
//   copy[index].text = event.target.value;
//   setArr(copy);
// }
// function editStart(index) {
//   const copy = Object.assign([], todos);
//   copy[index].isEdit = true;
//   setArr(copy);
// }
// function editEnd(index) {
//   const copy = Object.assign([], todos);
//   copy[index].isEdit = false;
//   setArr(copy);
// }


//  if (isEdit) {
//    classCompleted += " editing";
//    arr.map((obj, index) => {
//      return (
//        <input
//          value={obj.text}
//          onChange={() => editSave(index, event)}
//          onBlur={() => editEnd(index)}
//        />
//      );
//    });
//  }





// import { React, Component } from "react";
// import NewTaskForm from "./new-task-form";
// import PropTypes from "prop-types";

// let propTypes = require("prop-types");
// export default class ToDoList extends Component {
//   static defaultProps = {
//     todos: [],
//     onDeleted: () => {},
//     onItemDone: () => {},
//     onItemActive: () => {},
//     onItemCompleted: () => {},
//     clearCompleted: () => {},
//   };
//   static propTypes = {
//     todos: propTypes.arrayOf(propTypes.object).isRequired,
//     onDeleted: propTypes.func,
//     onItemDone: propTypes.func,
//     onItemActive: propTypes.func,
//     onItemCompleted: propTypes.func,
//     clearCompleted: propTypes.func,
//   };

//   render() {
//     const {
//       todos,
//       onDeleted,
//       onItemDone,
//       onItemEdit,
//       onItemActive,
//       onItemCompleted,
//       clearCompleted,
//       onItemAdded,
//       editArr,
//     } = this.props;
//     const arrItems = todos.map((el) => {
//       return (
//         <NewTaskForm
//           {...el}
//           onDeleted={() => onDeleted(el.id)}
//           key={el.id}
//           onItemDone={() => onItemDone(el.id)}
//           onItemEdit={() => onItemEdit(el.id)}
//           onItemActive={() => onItemActive(el.id)}
//           onItemCompleted={() => onItemCompleted(el.id)}
//           clearCompleted={() => clearCompleted(el.id)}
//           onItemAdded={() => onItemAdded(el.id)}
//           todos={todos}
//           onItemSubmit={{
//             id: { ...el.id },
//           }}
//         />
//       );
//     });
//     return (
//       <section className="main">
//         <ul className="todo-list">{arrItems}</ul>
//       </section>
//     );
//   }
// }









//  import { React, Component } from "react";
// import { useState } from "react";
// import { formatDistance } from "date-fns";
// import PropTypes from "prop-types";

// let propTypes = require("prop-types");

// function NewTaskForm({
//   todos,
//   label,
//   done,
//   id,
//   isEdit,
//   createdAt,
//   onDeleted,
//   onItemDone,
//   onItemEdit,
//   onItemAdded,
//   editArr,
// }) {
//   const [input, setInput] = useState(label);
//   const [arr, setArr] = useState(todos);

//   const onItemSubmit = (e, id) => {
//     e.preventDefault();
//     const copy = JSON.parse(JSON.stringify(todos));
//     let newArr = [...copy].map((el) => {
//       if (el.id == id) {
//         return { ...el, isEdit: !isEdit, label: e.target.value, done: !done };
//       }
//       return el;
//     });
//     console.log(newArr);
//   };

//   let classCompleted = "";
//   if (done) {
//     classCompleted += "completed";
//   }
//   if (isEdit) {
//     classCompleted -= "completed";
//     classCompleted += " editing";
//     return (
//       <form onSubmit={onItemSubmit}>
//         <input
//           type="text"
//           className="edit"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//       </form>
//     );
//   }

//   return (
//     <li className={classCompleted} onClick={onItemDone}>
//       <div className="view">
//         <input className="toggle" type="checkbox" />
//         <label>
//           <span className="description" id={id}>
//             {label}
//           </span>
//           <span className="created">
//             created{" "}
//             {formatDistance(createdAt, Date.now(), {
//               includeSeconds: true,
//             })}{" "}
//             ago
//           </span>
//         </label>
//         <button className="icon icon-edit" onClick={onItemEdit}></button>
//         <button className="icon icon-destroy" onClick={onDeleted}></button>
//       </div>
//     </li>
//   );
// }


// import { React, Component } from "react";
// import { useState } from "react";
// import { formatDistance } from "date-fns";
// import NewTaskForm from "./new-task-form";
// import PropTypes from "prop-types";

// let propTypes = require("prop-types");
// function ToDoList({
//   todos,
//   label,
//   id,
//   done,
//   isEdit,
//   createdAt,
//   onDeleted,
//   onItemDone,
//   onItemEdit,
//   onItemActive,
//   onItemCompleted,
//   clearCompleted,
//   onItemAdded,
//   editArr,
// }) {
//   const [input, setInput] = useState(label);
//   //   const [arr, setArr] = useState(todos);

//   const onItemSubmit = (e, id) => {
//     e.preventDefault();
//     const copy = JSON.parse(JSON.stringify(todos));
//     let newArr = [...copy].map((el) => {
//       if (el.id == id) {
//         return { ...el, isEdit: !isEdit, label: e.target.value, done: !done };
//       }
//       return el;
//     });
//     console.log(newArr);
//   };

//   let classCompleted = "";
//   if (done) {
//     classCompleted += "completed";
//   }
//   if (isEdit) {
//     classCompleted -= "completed";
//     classCompleted += " editing";
//     return (
//       <form onSubmit={onItemSubmit}>
//         <input
//           type="text"
//           className="edit"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//       </form>
//     );
//   }

//   <div>
//     {todos.map((el) => {
//       return (
//         <label
//           key={el.id}
//           onDeleted={() => onDeleted(el.id)}
//           onItemDone={() => onItemDone(el.id)}
//           onItemEdit={() => onItemEdit(el.id)}
//           onItemActive={() => onItemActive(el.id)}
//           onItemCompleted={() => onItemCompleted(el.id)}
//           clearCompleted={() => clearCompleted(el.id)}
//           onItemAdded={() => onItemAdded(el.id)}
//           todos={todos}
//         >
//           <li className={classCompleted} onClick={onItemDone}>
//             <div className="view">
//               <input className="toggle" type="checkbox" />
//               <label>
//                 <span className="description" id={el.id}>
//                   {el.label}
//                 </span>
//                 <span className="created">
//                   {/* created{" "}
//                   {formatDistance(createdAt, Date.now(), {
//                     includeSeconds: true,
//                   })}{" "}
//                   ago */}
//                 </span>
//               </label>
//               <button className="icon icon-edit" onClick={onItemEdit}></button>
//               <button
//                 className="icon icon-destroy"
//                 onClick={onDeleted}
//               ></button>
//             </div>
//           </li>
//         </label>
//       );
//     })}{" "}
//   </div>;
// }

// ToDoList.defaultProps = {
//   todos: [],
//   onDeleted: () => {},
//   onItemDone: () => {},
//   onItemActive: () => {},
//   onItemCompleted: () => {},
//   clearCompleted: () => {},
// };

// ToDoList.propTypes = {
//   todos: propTypes.arrayOf(propTypes.object).isRequired,
//   onDeleted: propTypes.func,
//   onItemDone: propTypes.func,
//   onItemActive: propTypes.func,
//   onItemCompleted: propTypes.func,
//   clearCompleted: propTypes.func,
// };

// export default ToDoList;
