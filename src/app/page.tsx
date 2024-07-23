export default function Home() {
  return (
    <div className="container mt-5">
      <h3 className="mb-3">Please fill in the prompt</h3>
      <textarea className="form-control mb-3" rows={10} placeholder="Enter your prompt here..."></textarea>
      <button type="button" className="btn btn-primary">Get result</button>
    </div>
  );
}
