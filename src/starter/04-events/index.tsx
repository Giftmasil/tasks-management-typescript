import { useState } from "react";

type Person = {
  name: string;
}

function Component() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get('text') as string;
    const person: Person = { name: text };
    const data = Object.fromEntries(formData)
    console.log(data)
    console.log(person)
  }

  return (
    <section>
      <h2>Events example</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
        name="text" 
        type="text" 
        className="form-input mb-1" 
        value={text} 
        onChange={(e) => {
          setText(e.target.value)
        }}/>
        <input
        name="email" 
        type="email" 
        className="form-input mb-1" 
        value={email} 
        onChange={handleChange}/>
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
