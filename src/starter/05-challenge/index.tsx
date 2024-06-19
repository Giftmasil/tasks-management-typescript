type ProfileCardProps = {
  type: 'basic';
  name: string;
} | {
  type: 'advanced';
  name: string;
  email: string;
};


function Component(props:ProfileCardProps) {
  if (props.type === 'basic') {
    return (
      <article className="alert alert-success">
        <h2>user : {props.name}</h2>
      </article>
    )
  } else {
    return (
      <div>
        <article className="alert alert-danger">
          <h2>user : {props.name}</h2>
          <h2>email : {props.email}</h2>
        </article>
      </div>
    );
  }
}
export default Component;
