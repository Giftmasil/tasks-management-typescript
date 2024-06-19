import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}


function Component() {
  const context = useTheme();
  console.log(context);
  
  return (
    <div>
      <h2>React & Typescript</h2>
      <button onClick={() => {
        context.setTheme(context.theme === 'dark' ? 'light' : 'dark');
      }}
      className="btn btn-center"
      >toggle theme</button>
    </div>
  );
}
export default ParentComponent;
