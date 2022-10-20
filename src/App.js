import "./App.css";
import "./app-style.css";
import styles from "./app-style.module.css";
import Greet from "./components/greet";
import Message from "./components/message";
import ClickHandler from "./components/click-handler";
import ParentComponent from "./components/parent-component";
import UserGreet from "./components/user-greeting";
import NameList from "./components/name-list";
import StyleSheet from "./components/stylesheet";
import InlineStyle from "./components/inline-styling";
import Forms from "./components/form";
import PostList from "./components/post-list";
import PostForm from "./components/post-form";
import { FcLike } from "react-icons/fc";
import DataList from "./components/data-list";
function App() {
  return (
    <div className="App">
      {/*This is first Component Greet*/}
      <Greet userName="Kiran">
        <p>This Is my child Dev</p>
      </Greet>
      <Greet userName="Maynak" />
      <FcLike />
      <button>Action</button>
      <Greet userName="Shubham" />

      {/* This is Second Component Message */}
      <Message></Message>

      {/* This is Third Component ClickHandler */}
      <ClickHandler></ClickHandler>

      {/* This is Forth Component Parent Component */}
      <ParentComponent></ParentComponent>

      {/* This is Fifth Component USerGreet */}
      <UserGreet></UserGreet>

      {/* This is Sixth Component Namelist */}
      <NameList></NameList>
      
      {/* This is Seventh Component Stylesheet */}
      <StyleSheet></StyleSheet>
      
      <InlineStyle /> {/* This shows inline style */}
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      
      <Forms />
      <PostList />
      <PostForm />
      <DataList />
    </div>
  );
}

export default App; //app function is now export in any file or folder
