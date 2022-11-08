export const Form = ({ data }) => {
  data = data || {};
  return (
    <div className="graffito">
      hello, {data}!
    </div>
  );
}
